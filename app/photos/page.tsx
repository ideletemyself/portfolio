'use client';

import { useState } from 'react';
import Image from 'next/image';

const Photos: React.FC = () => {
  const images = ['/images/photos/astrophotography/DSC01836.webp', 
                  '/images/photos/astrophotography/DSC01840.webp', 
                  '/images/photos/astrophotography/DSC01855.webp']; // replace with your image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col bg-white items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl py-4 text-purple-900 font-bold">Photos</h1>
        <p className="text-2xl text-purple-700 text-opacity-75">
            My collections of photography.
        </p>
        <div className="max-w-4xl bg-white rounded overflow-hidden shadow-2xl">
            <Image className="flex h-auto px-3 py-4 space-x-4" src={images[currentImageIndex]}
                    width={900}
                    height={600}
                    alt="Slide" />
        </div>
            <div className="flex px-3 py-4 space-x-4">
                <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={prevImage}>Previous</button>
                <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={nextImage}>Next</button>
            </div>
      </main>
    </div>
  );
};

export default Photos;