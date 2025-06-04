import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and styled-components. Features smooth animations, page transitions, and a beautiful starfield background effect.",
    technologies: ["React", "TypeScript", "Styled Components", "Framer Motion", "Vite"],
    imageUrl: "/images/portfolio-preview.png",
    githubUrl: "https://github.com/The-Innominate/The-Innominate.github.io",
    liveUrl: "https://the-innominate.github.io",
    features: [
      "Responsive design that works on all devices",
      "Smooth page transitions with wave effects",
      "Interactive starfield background animation",
      "Modern UI with glassmorphism effects",
      "Project showcase with detailed modals"
    ]
  },
  // Add more projects here
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PortfolioContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </Title>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedProject(project)}
          >
            {project.imageUrl && (
              <ProjectImage>
                <img src={project.imageUrl} alt={project.title} />
              </ProjectImage>
            )}
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map(tech => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default Portfolio; 