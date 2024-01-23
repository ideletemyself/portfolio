// components/Hero.tsx

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <>
      <div className="relative h-1/2 w-full">
        <Image className="object-cover w-full -z-1"
          src={backgroundImage}
          sizes="(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)"
          style={{
            objectFit: 'contain'
          }}
          width={1900}
          height={900}
          alt="Slide"
          placeholder="blur"
          blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
        />
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="relative flex items-center justify-center h-full">
            <div className="text-center text-white">
              <h1 className="subpixel-antialiased text-2xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8xl font-bold">{title}</h1>
              <p className="subpixel-antialiased text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl ">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;