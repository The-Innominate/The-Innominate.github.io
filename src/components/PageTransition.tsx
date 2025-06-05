import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WaveTransition from './WaveTransition';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [showWave, setShowWave] = useState(false);
  const location = useLocation();
  const lastPathRef = React.useRef(location.pathname);

  const handleTransition = useCallback(() => {
    if (lastPathRef.current === location.pathname) return;
    
    console.log('Starting transition:', {
      from: lastPathRef.current,
      to: location.pathname
    });
    
    lastPathRef.current = location.pathname;
    setShowWave(true);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  useEffect(() => {
    handleTransition();
  }, [handleTransition]);

  const handleWaveComplete = useCallback(() => {
    setShowWave(false);
  }, []);

  return (
    <TransitionContainer>
      <PageContent>
        {children}
      </PageContent>
      {showWave && (
        <WaveTransition
          isOpen={true}
          onDone={handleWaveComplete}
          colors={{
            deep: '#023436',
            surface: '#03B5AA',
            highlight: '#C2AFF0',
            foam: '#ffffff'
          }}
          speed={2.2}
          intensity={1.6}
          translucency={0.92}
        />
      )}
    </TransitionContainer>
  );
};

const TransitionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: transparent;
  z-index: 1;
`;

const PageContent = styled.div`
  opacity: 1;
  transition: opacity 0.3s ease;
`;

export default PageTransition; 