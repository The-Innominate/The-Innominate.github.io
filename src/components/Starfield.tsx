import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StarfieldContainer = styled.div`
  position: fixed;
  top: -5vh;
  left: 0;
  width: 100vw;
  height: 110vh;
  z-index: -10;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.primary};
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

interface Star {
  x: number;
  y: number;
  r: number;
  tw: number;
  speed: number;
  drift: number;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const STAR_COUNT = Math.floor((w * h) / 1800);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      starsRef.current = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        starsRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.2,
          tw: Math.random() * Math.PI * 2,
          speed: 0.05 + Math.random() * 0.08,
          drift: (Math.random() - 0.5) * 0.04
        });
      }
    };

    const draw = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, w, h);
      
      starsRef.current.forEach(star => {
        // Twinkle effect
        const twinkle = 0.7 + 0.5 * Math.sin(star.tw);
        ctx.globalAlpha = twinkle;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff8e1';
        ctx.shadowColor = '#ffb86b';
        ctx.shadowBlur = 8 * twinkle;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Animate
        star.tw += star.speed * 0.08;
        star.x += star.drift;

        // Wrap around screen
        if (star.x < 0) star.x = w;
        if (star.x > w) star.x = 0;
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <StarfieldContainer>
      <Canvas ref={canvasRef} />
    </StarfieldContainer>
  );
};

export default Starfield; 