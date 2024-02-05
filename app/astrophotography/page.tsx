'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper } from 'swiper';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

interface Image {
  src: string;
  alt: string;
}

type ImageType = {
  src: string;
  alt?: string;
};

const Astrophotography: React.FC = () => {
  const images: Image[] = [
    {
      src: '/Blue_Orion_Shot1',
      alt: 'The Orion constellation with a blue hue, 1st photo',
    },
    {
      src: '/Blue_Starry_Night_Shot1',
      alt: 'A random shot of a section of the night sky with a blue hue',
    },
    {
      src: '/Purple_Orion_Shot1',
      alt: 'The Orion constellation with a purple hue, 1st photo',
    },
    {
      src: '/Purple_Orion_Shot2',
      alt: 'The Orion constellation with a purple hue, 2nd photo',
    },
    {
      src: '/Purple_Orion_Shot3',
      alt: 'The Orion constellation with a purple hue, 3rd photo',
    },
    {
      src: '/Starry_Night_Sky_with_Clouds_Shot1',
      alt: 'A colorful photo of a cloudy night sky, 1st photo',
    },
    {
      src: '/Starry_Night_Sky_with_Clouds_Shot2',
      alt: 'A colorful photo of a cloudy night sky, 2nd photo',
    },
    {
      src: '/Starry_Night_Sky_with_Clouds_Shot3',
      alt: 'A colorful photo of a cloudy night sky, 3rd photo',
    },
    {
      src: '/Starry_Night_Sky_with_Clouds_Shot4',
      alt: 'A colorful photo of a cloudy night sky, 4th photo',
    },
    {
      src: '/Night_Streetlight_Gate',
      alt: 'A photo of a street light behind a gate with the night sky in the background',
    },
  ].map((image) => ({
    ...image,
    src: `/images/astro${image.src}.webp`,
  }));

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(
    null
  );

  return (
    <>
      {isModalOpen && selectedImage && (
        <div
          onClick={toggleModal}
          className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black'
        >
          <div className='w-full'>
            <Image
              className='w-full max-h-svh mx-auto'
              src={selectedImage.src}
              alt={selectedImage.alt ?? ''}
              sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
              style={{
                objectFit: 'contain',
              }}
              width={7028}
              height={4688}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
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

      <div className='bg-behr-debonair-blue flex flex-col items-center py-8'>
        <div className='container items-center justify-center flex'>
          <div className='bg-very-light-brown rounded shadow-lg w-full sm:w-3/4'>
            {!isModalOpen && images.length > 0 && (
              <>
                <SwiperReact
                  loop={true}
                  navigation={true}
                  spaceBetween={50}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  initialSlide={currentSlideIndex ?? 0}
                  onSlideChange={(swiper) => {
                    setCurrentSlideIndex(swiper.activeIndex);
                  }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className='flex items-center justify-center'>
                        <Image
                          className='object-cover max-h-svh px-3 py-3 z-10'
                          src={image.src}
                          alt={image.alt}
                          sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={7028}
                          height={4688}
                          onClick={() => {
                            toggleModal();
                            setSelectedImage(image);
                          }}
                          placeholder='blur'
                          blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                          }
                          priority
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </SwiperReact>
                <SwiperReact
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={12}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className='thumbs mt-3 h-32 w-full rounded-lg'
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <button className='flex h-full w-full items-center justify-center'>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={7028}
                          height={4688}
                          placeholder='blur'
                          blurDataURL={
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                          }
                          className='block h-full w-full object-cover'
                        />
                      </button>
                    </SwiperSlide>
                  ))}
                </SwiperReact>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Astrophotography;
