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
    title: "Space Golf",
    description: "A physics-based mobile game that blends the precision of mini-golf with the chaos of orbital mechanics. Players launch golf balls across low-gravity planetoids, using gravitational slingshots and black hole hazards to reach the goal.",
    technologies: ["Unity", "C#", "Physics", "Mobile Development"],
    imageUrl: "/project_images/spaceGolf.png",
    githubUrl: "https://github.com/The-Innominate/space-golf",
    features: [
      "Custom physics handling for space-based movement",
      "Procedural level tools and modular hazard design",
      "Fully responsive UI and animation-driven feedback",
      "State and Factory design patterns for power-ups and hazards",
      "Orbital mechanics and gravitational slingshots"
    ]
  },
  {
    title: "Warmonger45",
    description: "A tactical arena brawler where players fight for survival in hostile environments filled with enemies and hazards. The project emphasizes spatial combat design, reactive movement mechanics, and tight moment-to-moment gameplay.",
    technologies: ["Unity", "C#", "Level Design", "Environmental Design", "Gameplay Programming"],
    imageUrl: "/project_images/warmonger45.png",
    githubUrl: "https://github.com/The-Innominate/warmonger-final",
    liveUrl: "https://store.steampowered.com/app/2640870/Warmonger",
    features: [
      "Led level and environmental design for all game arenas",
      "Implemented swimming mechanics with water detection and buoyancy",
      "Developed player movement and hit detection systems",
      "Created gameplay clarity through strategic lighting and layout",
      "Integrated art assets with combat zones and mechanics",
      "Available on Steam for purchase and play"
    ]
  },
  {
    title: "Satori",
    description: "A data-driven platform that analyzes and visualizes prediction accuracy over time—originally built for Bitcoin price forecasting but expandable to any prediction model. The system ingests, scores, and displays real-time and historical streams from multiple sources, letting users evaluate algorithmic performance at a glance.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "TypeScript", "React", "AnyChart", "Docker"],
    imageUrl: "/project_images/satori.png",
    githubUrl: "https://github.com/The-Innominate/Satori-Central",
    features: [
      "Built aligned prediction vs. observation API endpoints using FastAPI",
      "Implemented a logarithmic scoring algorithm for real-time predictor ranking",
      "Developed advanced AnyChart visualizations with dynamic series and annotations",
      "Created backend logic for error calculations and stream synchronization",
      "Managed frontend state and rendering with React hooks and TypeScript",
      "Optimized PostgreSQL queries for efficient time-bucketed data access",
      "Containerized development environment with Docker (despite its occasional gaslighting)",
      "Note: Some components are private due to sensitive data handling"
    ]
  },
  {
    title: "QLO: Quest of the Lonely Octopus",
    description: "A narrative-driven puzzle platformer starring a lonely octopus on a quest through intricate underwater worlds. Designed and built from the ground up, this project blends storytelling, puzzle-solving, and physics-based gameplay into a cohesive experience. Though not hosted live, the full source and demo builds are available on GitHub.",
    technologies: ["Unity", "C#", "Game Design", "Level Design", "Animation"],
    imageUrl: "/project_images/qlo.png",
    githubUrl: "https://github.com/The-Innominate/qlo",
    features: [
      "Full solo development from concept to polished prototype",
      "Designed complex puzzle levels with environmental storytelling",
      "Implemented smooth physics-based player movement and controls",
      "Integrated custom animations and sound cues for immersion",
      "Delivered well-documented codebase hosted publicly on GitHub"
    ]
  },
  {
    title: "Algorithm & Data Structure Projects",
    description: "A collection of algorithm and data structure implementations developed through coursework and personal projects. This body of work demonstrates deep understanding of fundamental computer science concepts, including graph algorithms, trees, linked lists, stacks, queues, and search/sort techniques.",
    technologies: ["C++", "C#", "Python", "Data Structures", "Algorithms"],
    imageUrl: "/project_images/algorithms.png",
    githubUrl: "https://github.com/The-Innominate/algorithm-implementations",
    features: [
      "Implemented graph algorithms (Prim's MST, Dijkstra's shortest path)",
      "Developed generic data structures: BSTs, linked lists, stacks, queues",
      "Emphasized clean code, modular design, and comprehensive unit testing",
      "Documented Big-O complexity for each implementation",
      "Demonstrated problem-solving skills applicable to both academic and real-world scenarios"
    ]
  },
  {
    title: "Personal Portfolio",
    description: "A game-like portfolio website that blends space and sea aesthetics to showcase my work and personality. Built as both a professional showcase and an experiment in AI-assisted development, this project demonstrates modern web development practices while exploring the future of human-AI collaboration.",
    technologies: ["React", "TypeScript", "Framer Motion", "Styled Components", "Vite", "Vercel", "Cursor"],
    imageUrl: "/project_images/portfolio.png",
    githubUrl: "https://github.com/The-Innominate/portfolio-site",
    liveUrl: "https://the-innominate.github.io",
    features: [
      "Designed with a game-like aesthetic blending space and sea themes",
      "Built reusable, animated components using React and Framer Motion",
      "Implemented responsive layout with adaptive typography and grid design",
      "Integrated light/dark modes with custom themes and transitions",
      "Deployed with Vercel CI/CD pipeline for instant updates",
      "Leveraged AI tools (Cursor, Claude) for rapid prototyping and development",
      "Structured with clean, maintainable code and component isolation"
    ]
  },
  // Add more projects here
];

const getProjectTheme = (project: Project) => {
  // Game projects
  if (project.title === "Space Golf") {
    return {
      primary: '#03B5AA',    // Teal
      secondary: '#037971',  // Dark Teal
      accent: '#C2AFF0'      // Purple
    };
  }
  if (project.title === "Warmonger45") {
    return {
      primary: '#FF6B6B',    // Red
      secondary: '#FF8787',  // Light Red
      accent: '#FFA8A8'      // Soft Red
    };
  }
  if (project.title === "QLO: Quest of the Lonely Octopus") {
    return {
      primary: '#4ECDC4',    // Turquoise
      secondary: '#45B7AF',  // Dark Turquoise
      accent: '#FFE66D'      // Yellow
    };
  }
  // Web/Data projects
  if (project.title === "Satori") {
    return {
      primary: '#6C63FF',    // Indigo
      secondary: '#5A52E0',  // Dark Indigo
      accent: '#FF6584'      // Pink
    };
  }
  if (project.title === "Personal Portfolio") {
    return {
      primary: '#C2AFF0',    // Purple
      secondary: '#A890E0',  // Dark Purple
      accent: '#03B5AA'      // Teal
    };
  }
  // Algorithm projects
  if (project.title === "Algorithm & Data Structure Projects") {
    return {
      primary: '#FFD93D',    // Yellow
      secondary: '#FFB800',  // Dark Yellow
      accent: '#FF6B6B'      // Red
    };
  }
  // Default theme
  return {
    primary: '#03B5AA',
    secondary: '#037971',
    accent: '#C2AFF0'
  };
};

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
            $projectTheme={getProjectTheme(project)}
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

const ProjectCard = styled(motion.div)<{ $projectTheme: ReturnType<typeof getProjectTheme> }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(
      45deg,
      ${({ $projectTheme }) => $projectTheme.primary},
      ${({ $projectTheme }) => $projectTheme.secondary},
      ${({ $projectTheme }) => $projectTheme.accent},
      ${({ $projectTheme }) => $projectTheme.primary}
    );
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    background-size: 400% 400%;
    animation: borderGlow 3s ease infinite;
    filter: brightness(0.8);
  }

  &:hover {
    transform: translateY(-5px);
    
    &::before {
      opacity: 0.8;
    }
  }

  @keyframes borderGlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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