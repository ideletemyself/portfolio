'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImgixClient from '@imgix/js-core';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const Sagan: React.FC = () => {
  const images = [
    {
      src: 'Sagan/Closeup_Front_Shot_Of_Sagan',
      alt: 'Closeup of Sagan in colored lights',
    },
    {
      src: 'Sagan/Closeup_Side_Shot_Of_Sagan',
      alt: 'Closeup of Sagan at a side shot in colored lights',
    },
    {
      src: 'Sagan/Lounging_Sagan_On_Wood_Floor',
      alt: 'Sagan lounging on a wooden floor',
    },
    {
      src: 'Sagan/Sagan_Below_Colored_Ceiling_Fan',
      alt: 'Sagan below a ceiling fan with colored lights',
    },
    {
      src: 'Sagan/Sagan_In_Box_Colored_Lights',
      alt: 'Sagan in a box in colored lights',
    },
    {
      src: 'Sagan/Sagan_In_Small_Box',
      alt: 'Sagan in a small box with a blue sofa in the background',
    },
    { src: 'Sagan/Sagan_Licking_His_Chops', alt: 'Sagan licking his chops' },
    {
      src: 'Sagan/Sagan_Lounging_On_Black_Chair',
      alt: 'Sagan lounging on a black computer chair',
    },
    {
      src: 'Sagan/Sagan_On_Edge_Of_Blue_Sofa',
      alt: 'Sagan looking down from the edge of a blue sofa',
    },
    {
      src: 'Sagan/Sagan_On_Edge_Of_Blue_Sofa_Posing',
      alt: 'Sagan looking down posing cutely from the edge of a blue sofa',
    },
    {
      src: 'Sagan/Sagan_On_Green_Material_On_Blue_Sofa',
      alt: 'Sagan on a green canvas material on a blue sofa',
    },
    {
      src: 'Sagan/Sagan_Posing_On_Black_Chair',
      alt: 'Sagan posing from a black computer chair in colored lights',
    },
    {
      src: 'Sagan/Sagan_Posing_On_Wood_Floor',
      alt: 'Sagan posing on a wooden floor at night time',
    },
    {
      src: 'Sagan/Sagan_Yawning_On_Blue_Sofa',
      alt: 'Sagan having a big yawn on the top of a blue sofa',
    },
    {
      src: 'Sagan/Surprised_Sagan_In_Doorway',
      alt: 'Sagan surprised in a doorway with colored lights above',
    },
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
              width={4688}
              height={7028}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        Sagan
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
              <p>Orange cat resting</p>
              <p>On a windowsill, sun-kissed</p>
              <p>Whiskers twitch in dreams</p>
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
              width={4688}
              height={7028}
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

export default Sagan;
