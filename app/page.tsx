'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';

const Home: React.FC = () => {
  const [astroImage, setAstroImage] = useState<string>('');
  const [animalImage, setAnimalImage] = useState<string>('');
  const [natureImage, setNatureImage] = useState<string>('');

  useEffect(() => {
    fetch('/astrophotography.json')
      .then(response => response.json())
      .then(data => {
        setAstroImage(data[0]?.path);
        setAnimalImage(data[3]?.path);
        setNatureImage(data[7]?.path);
      });
  }, []);

  useEffect(() => {
    fetch('/animals.json')
      .then(response => response.json())
      .then(data => {
        setAnimalImage(data[0]?.path);
      });
  }, []);

  useEffect(() => {
    fetch('/nature.json')
      .then(response => response.json())
      .then(data => {
        setNatureImage(data[1]?.path);
      });
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen py-2 px-4 sm:px-20">
      <Hero 
        title="Brandon McKimmons" 
        subtitle="Photography, Programming & Producing Music" 
        backgroundImage="/images/photos/DSC01612.webp" 
      />  
      <main className="flex flex-col flex-auto w-full text-center py-4">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center">
          
        <Link href="/astrophotography" className="max-w-sm bg-white rounded overflow-hidden shadow-2xl mb-4 mr-2">
            <div className="flex flex-col max-w-4xl mt-6 sm:w-full">
            <div className="px-6 py-4">
            {astroImage && <Image className="w-full rounded" src={astroImage} alt="Astrophotography" width={720} height={400} priority />}
                <h3 className="font-bold text-2xl sm:text-2xl md:text-base lg:text-2xl xl:text-3xl text-purple-700 mb-2">Astrophotography</h3>
                <article className="sm:text-lg md:text-base lg:text-2xl xl:text-2xl text-purple-700 text-opacity-75">
                  My collections of astrophotography.
                </article>
                </div>
            </div>
          </Link>

          <Link href="/nature" className="max-w-sm bg-white rounded overflow-hidden shadow-2xl mb-4 mr-2">
            <div className="flex flex-wrap max-w-4xl mt-6 sm:w-full">
            <div className="px-6 py-4">
            {natureImage && <Image className="w-full rounded" src={natureImage} alt="Animals" width={720} height={400} priority />}
                <h3 className="font-bold text-2xl sm:text-3xl text-purple-700 mb-2">Nature</h3>
                <article className="text-lg sm:text-xl text-purple-700 text-opacity-75">
                  My collections of nature photos.
                </article>
                </div>
            </div>
          </Link>

          <Link href="/animals" className="max-w-sm bg-white rounded overflow-hidden shadow-2xl mb-4 mr-2">
            <div className="flex flex-wrap max-w-4xl mt-6 sm:w-full">
            <div className="px-6 py-4">
            {animalImage && <Image className="w-full rounded" src={animalImage} alt="Animals" width={720} height={400} priority />}
                <h3 className="font-bold text-2xl sm:text-3xl text-purple-700 mb-2">Animals</h3>
                <article className="text-lg sm:text-xl text-purple-700 text-opacity-75">
                  My collections of animal photos.
                </article>
                </div>
            </div>
          </Link>
      </div>  
      </main>
    </div>
  );
};

export default Home;