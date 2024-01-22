// components/Hero.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative bg-cover bg-center h-96 sm:h-96 md:h-96 lg:h-96 xl:h-screen 2xl:h-screen text-white" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center">
          <p className="subpixel-antialiased text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl font-bold">{title}</p>
          <p className="subpixel-antialiased text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl ">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;