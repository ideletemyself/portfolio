// components/Hero.tsx

import React from 'react';
import Image from 'next/image';
import ImgixClient from '@imgix/js-core';

interface HeroProps {
  title: string;
  subtitle: string;
}

const imgixClient = new ImgixClient({
  domain: 'brandonmckimmons-nextjs-563476088.imgix.net'
});

const imgUrl = imgixClient.buildURL(`/DSC01612-hero.webp`, {
  fit: 'fill', // fill mode
  auto: 'format, compress', // auto format and compress
  lossless: 1,
  // ... other Imgix parameters
});

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="relative h-1/2 w-full">
        <Image className="object-cover w-full -z-1"
          src={imgUrl}
          sizes="100vw"
          style={{
            objectFit: 'contain'
          }}
          width={3840}
          height={2561}
          alt="Slide"
          placeholder="blur"
          blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
          priority
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