'use client';

import { useState } from 'react';
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

const Sagan: React.FC = () => {
  const images: Image[] = [
    {
      src: '/Closeup_Front_Shot_Of_Sagan',
      alt: 'Closeup of Sagan in colored lights',
    },
    {
      src: '/Closeup_Side_Shot_Of_Sagan',
      alt: 'Closeup of Sagan at a side shot in colored lights',
    },
    {
      src: '/Lounging_Sagan_On_Wood_Floor',
      alt: 'Sagan lounging on a wooden floor',
    },
    {
      src: '/Sagan_Below_Colored_Ceiling_Fan',
      alt: 'Sagan below a ceiling fan with colored lights',
    },
    {
      src: '/Sagan_In_Box_Colored_Lights',
      alt: 'Sagan in a box in colored lights',
    },
    {
      src: '/Sagan_In_Small_Box',
      alt: 'Sagan in a small box with a blue sofa in the background',
    },
    { src: '/Sagan_Licking_His_Chops', alt: 'Sagan licking his chops' },
    {
      src: '/Sagan_Lounging_On_Black_Chair',
      alt: 'Sagan lounging on a black computer chair',
    },
    {
      src: '/Sagan_On_Edge_Of_Blue_Sofa',
      alt: 'Sagan looking down from the edge of a blue sofa',
    },
    {
      src: '/Sagan_On_Edge_Of_Blue_Sofa_Posing',
      alt: 'Sagan looking down posing cutely from the edge of a blue sofa',
    },
    {
      src: '/Sagan_On_Green_Material_On_Blue_Sofa',
      alt: 'Sagan on a green canvas material on a blue sofa',
    },
    {
      src: '/Sagan_Posing_On_Black_Chair',
      alt: 'Sagan posing from a black computer chair in colored lights',
    },
    {
      src: '/Sagan_Posing_On_Wood_Floor',
      alt: 'Sagan posing on a wooden floor at night time',
    },
    {
      src: '/Sagan_Yawning_On_Blue_Sofa',
      alt: 'Sagan having a big yawn on the top of a blue sofa',
    },
    {
      src: '/Surprised_Sagan_In_Doorway',
      alt: 'Sagan surprised in a doorway with colored lights above',
    },
  ].map((image) => ({
    ...image,
    src: `/images/sagan${image.src}.webp`,
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
              width={4688}
              height={7028}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        Sagan
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
              <p>Orange cat resting</p>
              <p>On a windowsill, sun-kissed</p>
              <p>Whiskers twitch in dreams</p>
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
                          className='object-cover h-svh w-full px-3 py-3'
                          src={image.src}
                          alt={image.alt}
                          sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={4688}
                          height={7028}
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
                          width={4688}
                          height={7028}
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

export default Sagan;
