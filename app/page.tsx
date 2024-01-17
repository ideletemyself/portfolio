'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import Head from 'next/head'

const Home: React.FC = () => {
  const astroImage = '/images/photos/astrophotography/DSC01836.webp';
  const animalImage = '/images/photos/animals/DSC01225.webp';
  const natureImage = '/images/photos/nature/DSC01776.webp';

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Hero
        title="Brandon McKimmons"
        subtitle="Photography, Programming & Producing Music"
        backgroundImage="/images/photos/DSC01612.webp"
      />

      <div className='flex flex-col w-full max-w-full items-center bg-very-light-brown'>
        <article className="prose bg-very-light-brown text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 pl-4 2xl:pl-0">
          <p>
            I am a software engineer, photographer and music producer.
          </p>
          <p>
            I enjoy creating and learning new things.
          </p>
          <p>
            Please enjoy my work of all types found on this website.
          </p>
        </article>
      </div>

      <div className="flex flex-col bg-behr-debonair-blue py-2 px-4 sm:px-20">

        <main className="flex flex-col w-full text-center items-center py-4">

          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center">

            <Link href="/astrophotography" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-2xl mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={astroImage}
                    alt="Astrophotography"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'/images/photos/DSC01836_small.webp'}
                  />
                  <h3 className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl text-med-light-magenta mb-2">Astrophotography</h3>
                  <article className="subpixel-antialiased sm:text-lg md:text-lg lg:text-2xl xl:text-2xl text-zinc-900 text-opacity-75">
                    My collections of astrophotography.
                  </article>
                </div>
              </div>
            </Link>

            <Link href="/nature" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-2xl mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={natureImage}
                    alt="Animals"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'/images/photos/DSC01836_small.webp'}
                  />
                  <h3 className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">Nature</h3>
                  <article className="subpixel-antialiased text-lg sm:text-xl text-zinc-900 text-opacity-75">
                    My collections of nature photos.
                  </article>
                </div>
              </div>
            </Link>

            <Link href="/animals" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-2xl mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={animalImage}
                    alt="Animals"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'/images/photos/DSC01836_small.webp'}
                  />
                  <h3 className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">Animals</h3>
                  <article className="subpixel-antialiased text-lg sm:text-xl text-zinc-900 text-opacity-75">
                    My collections of animal photos.
                  </article>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;