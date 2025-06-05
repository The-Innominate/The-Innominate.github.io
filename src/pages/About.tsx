import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <AboutContent>
          <AboutText>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="page-title"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-intro"
            >
              I'm Cameron Sadusky, a Game Developer & Software Engineer who thrives in environments that challenge the conventional and invite experimentation. I'm driven by a love of elegant systems, the thrill of turning chaos into clarity, and the joy of crafting meaningful player experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-description"
            >
              Equal parts builder and storyteller, I treat every problem as an opportunity to level up the user's experience. My approach is strategic and methodical, yet deeply intuitive – sometimes even brute-forced, as I balance precision with imagination. I'm not afraid to get caught up in perfecting a task, because in the end, it's all about creating something that brings joy to others.
            </motion.p>
          </AboutText>
          <AboutVisual>
            <ProfileArea>
              <ProfileImage src="/project_images/profilePicture.png" alt="Cameron Sadusky" />
            </ProfileArea>
          </AboutVisual>
        </AboutContent>
      </AboutHero>

      <SectionDivider />

      <SkillsSection>
        <SectionTitle>Technical Expertise</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h4>Game Development</h4>
            <SkillTags>
              <SkillTag>C++</SkillTag>
              <SkillTag>C#</SkillTag>
              <SkillTag>Unity</SkillTag>
              <SkillTag>Gameplay Mechanics</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Web Development</h4>
            <SkillTags>
              <SkillTag>TypeScript</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>UI/UX</SkillTag>
              <SkillTag>Frontend</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Systems & Architecture</h4>
            <SkillTags>
              <SkillTag>Backend Systems</SkillTag>
              <SkillTag>Algorithms</SkillTag>
              <SkillTag>Systems Thinking</SkillTag>
              <SkillTag>Architecture</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Special Focus</h4>
            <SkillTags>
              <SkillTag>AI Development</SkillTag>
              <SkillTag>Horror Games</SkillTag>
              <SkillTag>Experimental UI</SkillTag>
              <SkillTag>Player Experience</SkillTag>
            </SkillTags>
          </SkillCategory>
        </SkillsGrid>
      </SkillsSection>

      <SectionDivider />

      <JourneySection>
        <SectionTitle>My Journey</SectionTitle>
        <Timeline>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Building Worlds</h4>
              <p>Creating immersive game experiences and interactive systems</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Technical Innovation</h4>
              <p>Developing elegant solutions to complex problems</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Future Vision</h4>
              <p>Working towards creating the next generation of immersive, intelligent games</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Current Focus</h4>
              <p>Developing AI-based horror games and contributing to innovative game studios</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </JourneySection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  width: 100%;
`;

const AboutHero = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const AboutText = styled.div`
  flex: 1;

  .page-title {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.electricBlue}, ${({ theme }) => theme.colors.accentPurple});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .about-intro {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  .about-description {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const AboutVisual = styled.div`
  flex: 1;
`;

const ProfileArea = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
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

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h3`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};

  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const JourneySection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.3;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
`;

const TimelineMarker = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  margin: 0 ${({ theme }) => theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

const TimelineContent = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};

  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export default About; 