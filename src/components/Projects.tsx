import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { projectsData, ProjectCategory } from '../data/projectsData';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="Recent work I've done"
        />
        
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'web'} 
            onClick={() => setActiveCategory('web')}
          >
            Web
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'mobile'} 
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'backend'} 
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </CategoryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-primary-600 text-white' 
          : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow animate-slide-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="relative overflow-hidden group h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-primary-700 hover:text-primary-900 transition-colors"
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-primary-700 hover:text-primary-900 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs px-2 py-1 rounded-md">
          {project.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-secondary-700 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="text-xs bg-gray-100 text-secondary-700 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;