'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { imgixLoader } from '../components/ImgixLoader';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

const Astrophotography: React.FC = () => {
  const [images, setImages] = useState([
    {
      src: '/Astrophotography/Blue_Orion_Shot1',
      alt: 'The Orion constellation with a blue hue, 1st photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Blue_Starry_Night_Shot1',
      alt: 'A random shot of a section of the night sky with a blue hue',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Purple_Orion_Shot1',
      alt: 'The Orion constellation with a purple hue, 1st photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Purple_Orion_Shot2',
      alt: 'The Orion constellation with a purple hue, 2nd photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Purple_Orion_Shot3',
      alt: 'The Orion constellation with a purple hue, 3rd photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Starry_Night_Sky_with_Clouds_Shot1',
      alt: 'A colorful photo of a cloudy night sky, 1st photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Starry_Night_Sky_with_Clouds_Shot2',
      alt: 'A colorful photo of a cloudy night sky, 2nd photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Starry_Night_Sky_with_Clouds_Shot3',
      alt: 'A colorful photo of a cloudy night sky, 3rd photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Starry_Night_Sky_with_Clouds_Shot4',
      alt: 'A colorful photo of a cloudy night sky, 4th photo',
      blurHash: '',
    },
    {
      src: '/Astrophotography/Night_Streetlight_Gate',
      alt: 'A photo of a street light behind a gate with the night sky in the background',
      blurHash: '',
    },
  ]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = await imgixLoader(images);
        console.log('Loaded images:', loadedImages); // Log the loaded images

        const processedImages = loadedImages.map((image, index) => {
          console.log(`Processing image ${index}:`, image); // Log each image
          return {
            src: image.url, // map 'url' to 'src'
            alt: image.alt, // include 'alt' in the object
            blurHash: image.blurHash, // include 'blurHash' in the object
          };
        });

        setImages(processedImages);
      } catch (error) {
        console.error('Error loading images:', error); // Log any errors
      }
    };

    loadImages();
  }, []);

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
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
              style={{
                objectFit: 'contain',
              }}
              width={7028}
              height={4688}
              placeholder='blur'
              blurDataURL={`data:image/png;base64,${images[currentImageIndex].blurHash}`}
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-3xl sm:text-6xl py-8 text-med-light-magenta'>
        Astrophotography
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
              <p>Stars in silent spin</p>
              <p>Captured in night&apos;s deep canvas</p>
              <p>Cosmos drawn within</p>
            </article>
          </div>
        </div>
      )}

      <div className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
        <div className='bg-very-light-brown rounded shadow-lg relative'>
          {!isModalOpen && images.length > 0 && (
            <div>
              <Image
                className='object-cover max-h-svh max-w-min px-3 py-3 z-10'
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
                style={{
                  objectFit: 'contain',
                }}
                width={7028}
                height={4688}
                onClick={toggleModal}
                placeholder='blur'
                blurDataURL={`data:image/png;base64,${images[currentImageIndex].blurHash}`}
                priority
              />
            </div>
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

export default Astrophotography;
