'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImgixClient from '@imgix/js-core';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const Sagan: React.FC = () => {
  const images = [
    'DSC00792',
    'DSC00816',
    'DSC01509',
    'DSC01511',
    'DSC01527',
    'DSC01530',
    'DSC01548',
    'DSC01552',
    'DSC01572',
    'DSC01577',
    'DSC01586',
    'DSC01600',
    'DSC01601',
    'DSC01710',
    'DSC01714',
  ];

  const imgixClient = new ImgixClient({
    domain: 'brandonmckimmons-nextjs-563476088.imgix.net'
  });

  const imgUrl = (imagePath: string) => imgixClient.buildURL(`${imagePath}.webp`, {
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
          <div className='w-full'>
            <Image className='w-full max-h-svh mx-auto'
              src={imgUrl(images[currentImageIndex])}
              alt="Slide"
              sizes="calc(37.52vw - 16px)"
              style={{
                objectFit: 'contain'
              }}
              width={4688}
              height={7028}
              placeholder="blur"
              blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
            />
          </div>
        </div>
      )}

      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta">Sagan</h1>

      {!isModalOpen && images.length > 0 && (
        <div className='bg-behr-debonair-blue py-8'>
          <div id='hiku' className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
            <article className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4">
              <p>
                Orange cat resting
              </p>
              <p>
                On a windowsill, sun-kissed
              </p>
              <p>
                Whiskers twitch in dreams
              </p>
            </article>
          </div>
        </div>
      )}

      <div className="bg-behr-debonair-blue flex flex-wrap justify-center py-8">
        <div className="bg-very-light-brown rounded shadow-lg relative">

          {!isModalOpen && images.length > 0 && (
            <Image className="object-cover max-h-svh max-w-min px-3 py-3 z-10"
              src={imgUrl(images[currentImageIndex])}
              sizes="calc(37.52vw - 16px)"
              style={{
                objectFit: 'contain'
              }}
              width={4688}
              height={7028}
              alt="Slide"
              onClick={toggleModal}
              placeholder="blur"
              blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
              priority
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

export default Sagan;