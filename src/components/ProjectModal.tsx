import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Modal from './Modal';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <ProjectContent>
        {project.imageUrl && (
          <ProjectImage
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img src={project.imageUrl} alt={project.title} />
          </ProjectImage>
        )}
        
        <ProjectDescription>
          <p>{project.description}</p>
        </ProjectDescription>

        <TechStack>
          <h4>Technologies</h4>
          <TechTags>
            {project.technologies.map((tech, index) => (
              <TechTag
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {tech}
              </TechTag>
            ))}
          </TechTags>
        </TechStack>

        {project.features && (
          <Features>
            <h4>Key Features</h4>
            <FeatureList>
              {project.features.map((feature, index) => (
                <FeatureItem
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {feature}
                </FeatureItem>
              ))}
            </FeatureList>
          </Features>
        )}

        <ProjectLinks>
          {project.githubUrl && (
            <ProjectLink
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </ProjectLink>
          )}
          {project.liveUrl && (
            <ProjectLink
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16l-4-4 1.5-1.5 2.5 2.5 5.5-5.5 1.5 1.5-7 7z"/>
              </svg>
              Live Demo
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </Modal>
  );
};

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectImage = styled(motion.div)`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProjectDescription = styled.div`
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Features = styled.div`
  h4 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled(motion.li)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.electricBlue};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.electricBlue};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default ProjectModal; 