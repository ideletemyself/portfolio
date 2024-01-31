'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImgixClient from '@imgix/js-core';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const Animals: React.FC = () => {
  const images = [
    { src: 'Grey_Crowned_Crane_by_Water', alt: 'A grey crowned crane by a pond at the zoo' },
    { src: 'Black_Ostrich_Mating_Dance', alt: 'A male ostrich trying to mate by dancing' },
    { src: 'Green_Parrot_On_Branch', alt: 'A green parrot trying to get attention on a branch' },
    { src: 'Yellow_And_Blue_Parrot_On_Branch', alt: 'A yellow and blue parrot on a branch' },
    { src: 'Flamingo_Preening_By_Water', alt: 'A white flamingo preening by a pond at the zoo' },
    { src: 'Birds_Flying_Above_Park_Water', alt: 'A flock of birds flying above a pond at a park' },
    { src: 'Park_Water_with_Birds_and_University_Building', alt: 'A bunch of different birds on an alcove at a park pond' },
    { src: 'Seagulls_Perched_on_Lake_Shoreline_with_Cloudy_Skies', alt: 'Another shot of a bunch of birds on an alcove at a park pond' },
    { src: 'Geese_on_Grassland_with_Buildings_and_Cloudy_Sky', alt: 'A flock of geese on some grass at a park' },
    { src: 'Geese_Flying_Above_Water', alt: 'A flock of geese flying above water' },
    { src: 'Two_Geese_Swimming_in_Rippled_Water', alt: 'Two geese swimming in a pond of rippled water' },
    { src: 'Heron_and_Geese_by_Park_Water', alt: 'A heron and geese behind a tree at a park' },
    { src: 'Pelican_and_Cormorants_Swimming', alt: 'A group of cormorants and a pelican swimming in a pond' },
    { src: 'Duck_On_Rippled_Water', alt: 'A duck swimming on rippled pond water' },
  ];

  const imgixClient = new ImgixClient({
    domain: 'brandonmckimmons-nextjs-563476088.imgix.net',
  });

  const imgUrl = (image: { src: string; alt: string }) =>
    imgixClient.buildURL(`${image.src}.webp`, {
      fit: 'fill', // fill mode
      auto: 'format,compress', // auto format and compress
      lossless: 1,
      // ... other Imgix parameters
    });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + images.length) % images.length
      );
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div
          onClick={toggleModal}
          className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black'
        >
          <div className='w-full'>
            <Image
              className='w-full max-h-svh mx-auto'
              src={imgUrl(images[currentImageIndex])}
              alt={images[currentImageIndex].alt}
              sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
              style={{
                objectFit: 'contain',
              }}
              width={7000}
              height={6728}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        Animals
      </h1>

      {!isModalOpen && images.length > 0 && (
        <div className='bg-behr-debonair-blue py-8'>
          <div
            id='hiku'
            className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'
          >
            <article
              className='bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4'
            >
              <p>Through the lens, life stirs</p>
              <p>In a frame, wild hearts captured</p>
              <p>Nature&apos;s beauty purrs</p>
            </article>
          </div>
        </div>
      )}

      <div className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
        <div className='bg-very-light-brown rounded shadow-lg relative'>
          {!isModalOpen && images.length > 0 && (
            <Image
              className='object-cover max-h-svh max-w-min px-3 py-3 z-10'
              src={imgUrl(images[currentImageIndex])}
              alt={images[currentImageIndex].alt}
              sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
              style={{
                objectFit: 'contain',
              }}
              width={1501}
              height={1687}
              onClick={toggleModal}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
              priority
            />
          )}
          {!isModalOpen && (
            <div className='absolute inset-0 flex items-center justify-between px-4 pointer-events-none'>
              <ArrowLeftCircleIcon
                className='h-10 w-10 text-white opacity-75 hover:opacity-100 pointer-events-auto'
                onClick={prevImage}
              >
                Previous
              </ArrowLeftCircleIcon>
              <ArrowRightCircleIcon
                className='h-10 w-10 text-white opacity-75 hover:opacity-100 pointer-events-auto'
                onClick={nextImage}
              >
                Next
              </ArrowRightCircleIcon>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Animals;
