import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const scrollToFeatured = () => {
    const featured = document.querySelector('.featured-work');
    if (featured) {
      featured.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-title"
            >
              Cameron Sadusky
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              Software Engineer and Game Dev
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-tagline"
            >
              Where confusion breeds creativity in code
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="scroll-indicator"
            >
              <ScrollButton onClick={scrollToFeatured} aria-label="Scroll to Featured Work">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10V30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M10 22L20 32L30 22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ScrollButton>
            </motion.div>
          </HeroText>
          <HeroVisual>
            <FloatingElements>
              <Element className="element-1" />
              <Element className="element-2" />
              <Element className="element-3" />
            </FloatingElements>
          </HeroVisual>
        </HeroContent>
      </HeroSection>

      <SectionDivider />

      <FeaturedWorkSection className="featured-work">
        <SectionTitle>Featured Projects</SectionTitle>
        <WorkGrid>
          <WorkCard>
            <WorkImage>
              <PlaceholderImage>Game Project</PlaceholderImage>
            </WorkImage>
            <h4>Interactive Game Title</h4>
            <p>Brief description of your game project</p>
          </WorkCard>
          <WorkCard>
            <WorkImage>
              <PlaceholderImage>Web App</PlaceholderImage>
            </WorkImage>
            <h4>Web Application</h4>
            <p>Full-stack application showcase</p>
          </WorkCard>
          <WorkCard>
            <WorkImage>
              <PlaceholderImage>Creative Code</PlaceholderImage>
            </WorkImage>
            <h4>Creative Coding</h4>
            <p>Artistic programming experiment</p>
          </WorkCard>
        </WorkGrid>
      </FeaturedWorkSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const HeroText = styled.div`
  flex: 1;
  text-align: center;

  .hero-title {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.electricBlue}, ${({ theme }) => theme.colors.accentPurple});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .hero-tagline {
    font-style: italic;
    opacity: 0.95;
    margin-bottom: 2.5rem;
  }

  .scroll-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

const ScrollButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.colors.electricBlue};
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 16px rgba(194, 175, 240, 0.8));
  animation: arrowPulse 2.2s infinite alternate;

  &:hover {
    transform: translateY(5px);
  }

  @keyframes arrowPulse {
    0% { opacity: 0.25; transform: translateY(0) scale(1.2); }
    60% { opacity: 0.55; transform: translateY(18px) scale(1.35); }
    100% { opacity: 0.35; transform: translateY(0) scale(1.2); }
  }
`;

const HeroVisual = styled.div`
  flex: 1;
  position: relative;
`;

const FloatingElements = styled.div`
  width: 100%;
  height: 400px;
`;

const Element = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.electricBlue}, ${({ theme }) => theme.colors.accentPurple});
  opacity: 0.6;
  filter: blur(20px);

  &.element-1 {
    width: 200px;
    height: 200px;
    top: 20%;
    left: 20%;
    animation: float 6s ease-in-out infinite;
  }

  &.element-2 {
    width: 150px;
    height: 150px;
    top: 40%;
    right: 20%;
    animation: float 8s ease-in-out infinite;
  }

  &.element-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 40%;
    animation: float 7s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const SectionDivider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.secondary},
    transparent
  );
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const FeaturedWorkSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  color: ${({ theme }) => theme.colors.text};
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const WorkCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  h4 {
    margin: ${({ theme }) => theme.spacing.md} 0;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const WorkImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export default Home; 