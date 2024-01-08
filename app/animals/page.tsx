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

  return (
    <div className="flex bg-white flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl py-4 text-left text-purple-900">Animals</h1>
        <div className="max-w-4xl bg-white rounded overflow-hidden shadow-2xl">
          {images.length > 0 && <Image className="flex h-auto px-3 py-4 space-x-4" src={images[currentImageIndex]}
                  width={900}
                  height={600}
                  alt="Slide" />}
        </div>
        <div className="flex px-3 py-4 space-x-4">
          <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={prevImage}>Previous</button>
          <button className="bg-purple-900 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full" onClick={nextImage}>Next</button>
        </div>
      </main>
    </div>
  );
};

export default Animals;