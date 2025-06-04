import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface WaveTransitionProps {
  isOpen: boolean;
  onMid?: () => void;
  onDone?: () => void;
  colors?: {
    deep: string;
    surface: string;
    highlight: string;
    foam: string;
  };
  speed?: number;
  intensity?: number;
  translucency?: number;
}

const WaveCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: none;
`;

// Improved Perlin noise implementation
const noise = (() => {
  const p = new Array(512);
  const permutation = [
    151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,
    68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,
    3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,
    112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,
    49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
  ];

  for (let i = 0; i < 256; i++) {
    p[i] = p[i + 256] = permutation[i];
  }

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (t: number, a: number, b: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number) => {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  return (x: number, y: number) => {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = fade(x);
    const v = fade(y);
    const A = p[X] + Y;
    const B = p[X + 1] + Y;
    return lerp(v, lerp(u, grad(p[A], x, y), grad(p[B], x - 1, y)),
      lerp(u, grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1)));
  };
})();

const WaveTransition: React.FC<WaveTransitionProps> = ({
  isOpen,
  onMid,
  onDone,
  colors = {
    deep: '#023436',
    surface: '#03B5AA',
    highlight: '#C2AFF0',
    foam: '#ffffff'
  },
  speed = 1,
  intensity = 1,
  translucency = 0.7
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const progressRef = useRef(0);
  const midTriggeredRef = useRef(false);

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    yBase: number,
    amplitude: number,
    color: string,
    offset: number,
    isFoam = false
  ) => {
    const { width, height } = ctx.canvas;
    const time = Date.now() * 0.001 * speed;
    
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, height);

    for (let x = 0; x <= width; x += 2) {
      // Combine multiple noise layers for more complex waves
      const noise1 = noise(x * 0.01 + offset, time * 0.5) * amplitude;
      const noise2 = noise(x * 0.02 + offset * 2, time * 0.3) * (amplitude * 0.5);
      const noise3 = noise(x * 0.005 + offset * 0.5, time * 0.7) * (amplitude * 0.25);
      const combinedNoise = noise1 + noise2 + noise3;
      
      const y = yBase + combinedNoise;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.closePath();

    if (isFoam) {
      // Foam effect with gradient
      const gradient = ctx.createLinearGradient(0, yBase - amplitude, 0, yBase + amplitude);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${translucency})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      ctx.fillStyle = gradient;
    } else {
      // Depth-based shading
      const gradient = ctx.createLinearGradient(0, yBase - amplitude, 0, yBase + amplitude);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, colors.deep);
      ctx.fillStyle = gradient;
    }

    // Add glow effect
    ctx.shadowColor = isFoam ? colors.foam : color;
    ctx.shadowBlur = isFoam ? 20 : 10;
    ctx.globalAlpha = isFoam ? translucency : 0.9;
    ctx.fill();
    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Calculate progress
    const duration = 1.1; // seconds
    const fps = 60;
    const totalFrames = Math.round(duration * fps);
    progressRef.current = Math.min(1, progressRef.current + 1 / totalFrames);

    // Easing function for smooth animation
    const ease = progressRef.current < 0.5
      ? 2 * progressRef.current * progressRef.current
      : -1 + (4 - 2 * progressRef.current) * progressRef.current;

    const yBase = height - (height * 1.1 * ease);

    // Draw multiple wave layers
    drawWave(ctx, yBase + 40, 32 * intensity, colors.deep, 0.2);
    drawWave(ctx, yBase + 20, 24 * intensity, colors.surface, 0.5);
    drawWave(ctx, yBase + 10, 18 * intensity, colors.highlight, 1.1);
    drawWave(ctx, yBase, 12 * intensity, colors.foam, 2.2, true);

    // Trigger mid callback
    if (!midTriggeredRef.current && progressRef.current > 0.45) {
      midTriggeredRef.current = true;
      onMid?.();
    }

    if (progressRef.current < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Animate wave out
      progressRef.current = 0;
      midTriggeredRef.current = false;
      const animateOut = () => {
        progressRef.current = Math.min(1, progressRef.current + 1 / totalFrames);
        const outEase = 1 - Math.pow(1 - progressRef.current, 2);
        const yBaseOut = height * (1 - outEase) - 40 * outEase;

        ctx.clearRect(0, 0, width, height);
        drawWave(ctx, yBaseOut + 40, 32 * intensity, colors.deep, 0.2 + 1.5);
        drawWave(ctx, yBaseOut + 20, 24 * intensity, colors.surface, 0.5 + 1.5);
        drawWave(ctx, yBaseOut + 10, 18 * intensity, colors.highlight, 1.1 + 1.5);
        drawWave(ctx, yBaseOut, 12 * intensity, colors.foam, 2.2 + 1.5, true);

        if (progressRef.current < 1) {
          animationRef.current = requestAnimationFrame(animateOut);
        } else {
          ctx.clearRect(0, 0, width, height);
          onDone?.();
        }
      };
      setTimeout(animateOut, 120);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    if (isOpen) {
      progressRef.current = 0;
      midTriggeredRef.current = false;
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen, colors, speed, intensity, translucency]);

  return <WaveCanvas ref={canvasRef} />;
};

export default WaveTransition; 