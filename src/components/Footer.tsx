import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">John<span className="text-accent-500">Doe</span></h2>
            <p className="text-primary-200 max-w-md">
              Full Stack Developer specializing in creating exceptional digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="p-2 bg-primary-800 rounded-full text-white hover:bg-primary-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-800 rounded-full text-white hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-800 rounded-full text-white hover:bg-primary-700 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300 flex items-center justify-center">
            &copy; {currentYear} John Doe. All rights reserved. Made with <Heart size={16} className="mx-1 text-accent-500" /> in Douala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;