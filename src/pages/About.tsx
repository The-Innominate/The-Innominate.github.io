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
              I'm a passionate developer who bridges the gap between creative vision and technical execution. 
              With experience spanning game development, web applications, and interactive experiences, 
              I bring ideas to life through code.
            </motion.p>
          </AboutText>
          <AboutVisual>
            <ProfileArea>
              <ProfilePlaceholder>Your Photo</ProfilePlaceholder>
            </ProfileArea>
          </AboutVisual>
        </AboutContent>
      </AboutHero>

      <SectionDivider />

      <SkillsSection>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          <SkillCategory>
            <h4>Frontend Development</h4>
            <SkillTags>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>CSS/SCSS</SkillTag>
              <SkillTag>HTML5</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Backend & Databases</h4>
            <SkillTags>
              <SkillTag>Node.js</SkillTag>
              <SkillTag>Python</SkillTag>
              <SkillTag>PostgreSQL</SkillTag>
              <SkillTag>MongoDB</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Game Development</h4>
            <SkillTags>
              <SkillTag>Unity</SkillTag>
              <SkillTag>C#</SkillTag>
              <SkillTag>Game Design</SkillTag>
              <SkillTag>3D Modeling</SkillTag>
            </SkillTags>
          </SkillCategory>
          <SkillCategory>
            <h4>Tools & Technologies</h4>
            <SkillTags>
              <SkillTag>Git</SkillTag>
              <SkillTag>Docker</SkillTag>
              <SkillTag>AWS</SkillTag>
              <SkillTag>Figma</SkillTag>
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
              <h4>Started Coding</h4>
              <p>Discovered programming through game development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>First Web Project</h4>
              <p>Built my first interactive web application</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Professional Development</h4>
              <p>Expanded into full-stack development</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineMarker />
            <TimelineContent>
              <h4>Current Focus</h4>
              <p>Creating immersive digital experiences</p>
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
`;

const AboutVisual = styled.div`
  flex: 1;
`;

const ProfileArea = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const ProfilePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
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

export default About; 