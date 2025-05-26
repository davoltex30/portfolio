import React from 'react';
import { 
  Code, Database, Server, Smartphone, 
  Figma, Terminal, GitBranch, Globe
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  mobile: Skill[];
  tools: Skill[];
}

export const skillsData: SkillsData = {
  frontend: [
    {
      name: 'React',
      icon: <Code size={24} />,
      level: 95,
    },
    {
      name: 'Next.js',
      icon: <Globe size={24} />,
      level: 90,
    },
    {
      name: 'JavaScript',
      icon: <Code size={24} />,
      level: 95,
    },
    {
      name: 'TypeScript',
      icon: <Code size={24} />,
      level: 85,
    },
    {
      name: 'HTML/CSS',
      icon: <Code size={24} />,
      level: 90,
    },
    {
      name: 'Tailwind CSS',
      icon: <Code size={24} />,
      level: 90,
    },
  ],
  backend: [
    {
      name: 'Django',
      icon: <Server size={24} />,
      level: 90,
    },
    {
      name: 'Python',
      icon: <Code size={24} />,
      level: 85,
    },
    {
      name: 'Node.js',
      icon: <Server size={24} />,
      level: 80,
    },
    {
      name: 'PostgreSQL',
      icon: <Database size={24} />,
      level: 75,
    },
    {
      name: 'MongoDB',
      icon: <Database size={24} />,
      level: 70,
    },
    {
      name: 'RESTful APIs',
      icon: <Server size={24} />,
      level: 90,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: <Smartphone size={24} />,
      level: 90,
    },
    {
      name: 'Expo',
      icon: <Smartphone size={24} />,
      level: 85,
    },
    {
      name: 'Mobile UI',
      icon: <Smartphone size={24} />,
      level: 80,
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: <GitBranch size={24} />,
      level: 90,
    },
    {
      name: 'Docker',
      icon: <Terminal size={24} />,
      level: 75,
    },
    {
      name: 'Figma',
      icon: <Figma size={24} />,
      level: 70,
    },
    {
      name: 'AWS',
      icon: <Server size={24} />,
      level: 65,
    },
    {
      name: 'CI/CD',
      icon: <Terminal size={24} />,
      level: 70,
    },
  ],
};