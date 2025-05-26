import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 animate-slide-up">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-secondary-600 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeading;