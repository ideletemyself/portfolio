// pages/index.tsx
import React from 'react';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Brandon McKimmons Photography
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {/* Replace with your images */}
          <a
            href="#"
            className="p-6 mt-6 text-left border w-72 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <Image className="w-60 h-40 rounded" src="/photos/DSC01836.webp" alt="Orion Astrophotography" width={720} height={400} />
            <h3 className="text-2xl font-bold">Orion</h3>
            <p className="mt-4 text-xl">
              Astrophotography of the Orion constellation.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;