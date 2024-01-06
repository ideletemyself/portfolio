// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Brandon McKimmons Portfolio
        </h1>

        <Link href="/photos" className="p-6 mt-6 text-left border w-72 rounded-xl hover:text-blue-600 focus:text-blue-600">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {/* Replace with your images */}
              <Image className="w-60 h-40 rounded" src="/images/photos/astrophotography/DSC01836.webp" alt="Orion Astrophotography" width={720} height={400} />
              <h3 className="text-2xl font-bold">Photos</h3>
              <p className="mt-4 text-xl">
                My collections of photography.
              </p>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Home;