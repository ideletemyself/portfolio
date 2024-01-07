// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-purple-900 py-4">
          Brandon McKimmons Portfolio
        </h1>

        <Link href="/photos" className="max-w-sm bg-white rounded overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="px-6 py-4">
            {/* Replace with your images */}
              <Image className="w-full rounded" src="/images/photos/astrophotography/DSC01836.webp" alt="Orion Astrophotography" width={720} height={400} />
              <h3 className="font-bold text-3xl text-purple-700 mb-2">Photos</h3>
              <article className="text-xl text-purple-700 text-opacity-75">
                My collections of photography.
              </article>
              </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;