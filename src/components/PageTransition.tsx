import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WaveTransition from './WaveTransition';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isWaveVisible, setIsWaveVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
      setIsWaveVisible(true);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const handleWaveMid = () => {
    // Update content here
    setIsTransitioning(false);
  };

  const handleWaveDone = () => {
    setIsWaveVisible(false);
  };

  return (
    <TransitionContainer>
      {children}
      <WaveTransition
        isOpen={isWaveVisible}
        onMid={handleWaveMid}
        onDone={handleWaveDone}
        colors={{
          deep: '#023436',
          surface: '#03B5AA',
          highlight: '#C2AFF0',
          foam: '#ffffff'
        }}
        speed={1.2}
        intensity={1.2}
        translucency={0.8}
      />
    </TransitionContainer>
  );
};

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 80px; /* Add padding to account for fixed header */
  background: transparent;
  z-index: 1;
`;

export default PageTransition; 