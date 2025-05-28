import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-accent-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-accent-500 font-medium mb-4">Full Stack Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hello, I'm Neba Suh
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 mb-8 max-w-xl">
              I build exceptional digital experiences for the web and mobile. Specializing in React, Next.js, Django, and React Native development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary-600 border border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full overflow-hidden shadow-2xl">
              <img
                  src="https://i.ibb.co/MkxB7Gzt/Chat-GPT-Image-May-27-2025-12-51-27-PM.png"
                  alt="Neba Suh"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-secondary-600 hover:text-primary-600 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;