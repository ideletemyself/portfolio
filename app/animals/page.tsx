'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const Animals: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('/animals.json')
      .then(response => response.json())
      .then(data => setImages(data.map((item: { path: string }) => item.path)));
  }, []);

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
              <div className='w-auto'>
                <Image className='max-h-svh max-w-max' src={images[currentImageIndex]} alt="Slide" 
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}  
                width={7000}
                height={7000} 
                placeholder="blur"
                blurDataURL={'/images/photos/DSC01836_small.webp'}
                  />
              </div>
            </div>
          )}

      <h1 className="text-center text-4xl sm:text-6xl py-4 text-purple-900">Animals</h1>
      
      <div className="flex flex-wrap justify-center">
        <div className="bg-white rounded shadow-2xl relative">
          <div className='w-full'>
            {!isModalOpen && images.length > 0 && (
              <Image className="object-cover max-h-svh md:max-w-2xl lg:max-w-3xl xl:max-w-max px-3 py-3 z-10" src={images[currentImageIndex]}
                sizes="100vw"
                style={{
                  objectFit: 'contain'
                }}  
                width={7000}
                height={7000}
                alt="Slide"
                onClick={toggleModal}
                placeholder="blur"
                blurDataURL={'/images/photos/DSC01836_small.webp'}
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
      </div>
    </>
  );
};

export default Animals;