import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies I work with"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Frontend Development
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.frontend.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Backend Development
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.backend.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Mobile Development
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.mobile.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tools & Others
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillsData.tools.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  return (
    <div 
      className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow animate-slide-up flex flex-col items-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-primary-600 mb-2">
        {skill.icon}
      </div>
      <h4 className="font-medium text-secondary-800 text-center">{skill.name}</h4>
      <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
        <div 
          className="bg-primary-600 h-full rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;