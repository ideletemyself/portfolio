'use client';

import { useState } from 'react';
import Image from 'next/image';
import generateImgUrls from '../components/GenerateImgixUrls';
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

const selectedImage: ImageType = {
  src: 'path/to/image',
  alt: 'image description',
};

const Animals: React.FC = () => {
  const images: Image[] = [
    {
      src: 'Animals/Grey_Crowned_Crane_by_Water',
      alt: 'A grey crowned crane by a pond at the zoo',
    },
    {
      src: 'Animals/Black_Ostrich_Mating_Dance',
      alt: 'A male ostrich trying to mate by dancing',
    },
    {
      src: 'Animals/Green_Parrot_On_Branch',
      alt: 'A green parrot trying to get attention on a branch',
    },
    {
      src: 'Animals/Yellow_And_Blue_Parrot_On_Branch',
      alt: 'A yellow and blue parrot on a branch',
    },
    {
      src: 'Animals/Flamingo_Preening_By_Water',
      alt: 'A white flamingo preening by a pond at the zoo',
    },
    {
      src: 'Animals/Birds_Flying_Above_Park_Water',
      alt: 'A flock of birds flying above a pond at a park',
    },
    {
      src: 'Animals/Park_Water_with_Birds_and_University_Building',
      alt: 'A bunch of different birds on an alcove at a park pond',
    },
    {
      src: 'Animals/Seagulls_Perched_on_Lake_Shoreline_with_Cloudy_Skies',
      alt: 'Another shot of a bunch of birds on an alcove at a park pond',
    },
    {
      src: 'Animals/Geese_on_Grassland_with_Buildings_and_Cloudy_Sky',
      alt: 'A flock of geese on some grass at a park',
    },
    {
      src: 'Animals/Geese_Flying_Above_Water',
      alt: 'A flock of geese flying above water',
    },
    {
      src: 'Animals/Two_Geese_Swimming_in_Rippled_Water',
      alt: 'Two geese swimming in a pond of rippled water',
    },
    {
      src: 'Animals/Heron_and_Geese_by_Park_Water',
      alt: 'A heron and geese behind a tree at a park',
    },
    {
      src: 'Animals/Pelican_and_Cormorants_Swimming',
      alt: 'A group of cormorants and a pelican swimming in a pond',
    },
    {
      src: 'Animals/Duck_On_Rippled_Water',
      alt: 'A duck swimming on rippled pond water',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(
    null
  );

  const processedImages: Image[] = generateImgUrls(images);

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
              width={7000}
              height={6728}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        Animals
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
              <p>Through the lens, life stirs</p>
              <p>In a frame, wild hearts captured</p>
              <p>Nature&apos;s beauty purrs</p>
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
                  {processedImages.map((image, index) => (
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
                          width={1501}
                          height={1687}
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
                  {processedImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <button className='flex h-full w-full items-center justify-center'>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          sizes='(min-width: 1280px) 1256px, (min-width: 1040px) 744px, (min-width: 780px) 648px, calc(100vw - 24px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={1501}
                          height={1687}
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

export default Animals;
