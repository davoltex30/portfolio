import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              A passionate Full Stack Developer based in Douala, Cameroon
            </h3>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              I am a versatile Full Stack Developer with expertise in building web and mobile applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless, 
              user-centered digital experiences that solve real-world problems.
            </p>
            <p className="text-secondary-700 mb-6 leading-relaxed">
              My journey in tech started with a deep curiosity about how digital products work. 
              This curiosity evolved into a passion for creating elegant solutions through code. 
              I enjoy the challenge of learning new technologies and applying them to build 
              innovative applications.
            </p>
            <p className="text-secondary-700 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities around Douala.
            </p>
            
            <div className="flex items-center text-secondary-700">
              <MapPin size={20} className="text-accent-500 mr-2" />
              <span>Based in Douala - Bonamoussadi, Cameroon</span>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase size={20} className="text-primary-600 mr-2" />
                Work Experience
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-secondary-800">Senior Full Stack Developer</h4>
                    <span className="text-sm text-secondary-600 flex items-center">
                      <Calendar size={14} className="mr-1" /> 2022 - Present
                    </span>
                  </div>
                  <p className="text-primary-600 mb-2">TechInnovate Solutions</p>
                  <p className="text-secondary-700 text-sm">
                    Lead development of web and mobile applications using React, Next.js, and Django.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-secondary-800">Full Stack Developer</h4>
                    <span className="text-sm text-secondary-600 flex items-center">
                      <Calendar size={14} className="mr-1" /> 2020 - 2022
                    </span>
                  </div>
                  <p className="text-primary-600 mb-2">Digital Creations Ltd</p>
                  <p className="text-secondary-700 text-sm">
                    Developed and maintained web applications with React and Django.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap size={20} className="text-primary-600 mr-2" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-secondary-800">B.Sc. Computer Science</h4>
                    <span className="text-sm text-secondary-600 flex items-center">
                      <Calendar size={14} className="mr-1" /> 2016 - 2020
                    </span>
                  </div>
                  <p className="text-primary-600 mb-2">University of Douala</p>
                  <p className="text-secondary-700 text-sm">
                    Specialized in Software Engineering with honors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;