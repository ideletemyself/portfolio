'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
          <div className='w-screen sm:max-w-sm md:max-w-xl lg:max-w-lg xl:max-w-lg 2xl:max-w-md'>
          <Image src={images[currentImageIndex]} alt="Slide" 
          width={7000}
          height={7000} 
          priority />
          </div>
        </div>
      )}
      <div className="items-center justify-center min-h-screen px-4 sm:px-20">
        <main className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-6xl py-4 text-purple-900">Animals</h1>
          <div className="bg-white rounded overflow-hidden shadow-2xl">
          <div className='w-full sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md 2xl:max-w-md'>
            {images.length > 0 && <Image className="flex h-auto px-3 py-4 space-x-4" src={images[currentImageIndex]}
                    width={7000}
                    height={7000}
                    alt="Slide"
                    onClick={toggleModal} 
                    priority />}
          </div>
          </div>
          <div className="flex px-3 py-4 space-x-4">
            <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={prevImage}>Previous</button>
            <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={nextImage}>Next</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Animals;