'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import image1 from '../../public/images/photos/astrophotography/DSC01720.webp';
import image2 from '../../public/images/photos/astrophotography/DSC01722.webp';
import image3 from '../../public/images/photos/astrophotography/DSC01723.webp';
import image4 from '../../public/images/photos/astrophotography/DSC01728.webp';
import image5 from '../../public/images/photos/astrophotography/DSC01836.webp';
import image6 from '../../public/images/photos/astrophotography/DSC01840.webp';
import image7 from '../../public/images/photos/astrophotography/DSC01841.webp';
import image8 from '../../public/images/photos/astrophotography/DSC01849.webp';
import image9 from '../../public/images/photos/astrophotography/DSC01854.webp';
import image10 from '../../public/images/photos/astrophotography/DSC01855.webp';
import image11 from '../../public/images/photos/astrophotography/Astro1.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

const Astrophotography: React.FC = () => {
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
            <Image className='max-h-svh max-w-max' src={images[currentImageIndex]} alt="Slide"
              sizes="100vw"
              style={{
                objectFit: 'contain'
              }}
              width={7000}
              height={7000}
              placeholder="blur"
            />
          </div>
        </div>
      )}

      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta">Astrophotography</h1>

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
              <Image
                className="object-cover max-h-svh md:max-w-2xl lg:max-w-3xl xl:max-w-7xl 2xl:max-w-max px-3 py-3 z-10"
                src={images[currentImageIndex]}
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                width={7000}
                height={7000}
                alt="Slide"
                onClick={toggleModal}
                placeholder="blur"
              />
          )}
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