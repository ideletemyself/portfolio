'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const Astrophotography: React.FC = () => {
  const images = [
    'DSC01720',
    'DSC01722',
    'DSC01723',
    'DSC01728',
    'DSC01836',
    'DSC01840',
    'DSC01841',
    'DSC01849',
    'DSC01854',
    'DSC01855',
  ];

  const buildURL = (imagePath: string) =>
    `https://brandonmckimmons-nextjs-563476088.imgix.net/${imagePath}.webp`;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images) {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div onClick={toggleModal} className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
          <div className='max-h-svh'>
            <Image className='h-full sm:max-h-svh sm:max-w-max md:max-h-svh md:w-full'
              src={buildURL(images[currentImageIndex])}
              alt="Slide"
              sizes="100vw"
              style={{
                objectFit: 'contain'
              }}
              width={7000}
              height={7000}
              placeholder="blur"
              blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
            />
          </div>
        </div>
      )}

      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-3xl sm:text-6xl py-8 text-med-light-magenta">Astrophotography</h1>

      {!isModalOpen && images.length > 0 && (
        <div className='bg-behr-debonair-blue py-8'>
          <div id='hiku' className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
            <article className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4">
              <p>
                Stars in silent spin
              </p>
              <p>
                Captured in night&apos;s deep canvas
              </p>
              <p>
                Cosmos drawn within
              </p>
            </article>
          </div>
        </div>
      )}

      <div className="bg-behr-debonair-blue flex flex-wrap justify-center py-8">
        <div className="bg-very-light-brown rounded shadow-lg relative">

          {!isModalOpen && images.length > 0 && (
            <Image className="object-cover h-full sm:max-h-svh sm:max-w-max md:max-h-svh md:w-full px-3 py-3 z-10"
              src={buildURL(images[currentImageIndex])}
              sizes="100vw"
              style={{
                objectFit: 'contain'
              }}
              width={7000}
              height={7000}
              alt="Slide"
              onClick={toggleModal}
              placeholder="blur"
              blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
            />
          )
          }
          {!isModalOpen && (
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <ArrowLeftCircleIcon className="h-10 w-10 text-white opacity-75 hover:opacity-100 pointer-events-auto" onClick={prevImage} >Previous</ArrowLeftCircleIcon>
              <ArrowRightCircleIcon className="h-10 w-10 text-white opacity-75 hover:opacity-100 pointer-events-auto" onClick={nextImage} >Next</ArrowRightCircleIcon>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Astrophotography;