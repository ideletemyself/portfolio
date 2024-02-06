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

const Nature: React.FC = () => {
  const images: Image[] = [
    {
      src: '/Nature/Solitary_Tree_Against_Blue_Sky',
      alt: 'A solitary tree in a golden field with blue sky',
    },
    {
      src: '/Nature/Autumn_Scrubland_with_Blue_Sky',
      alt: 'Autumn scrubland with a blue sky background',
    },
    {
      src: '/Nature/Birds_on_Dead_Trees_Blue_Sky',
      alt: 'Birds on top of dead trees with blue sky background',
    },
    {
      src: '/Nature/Blocked_Dirt_Path_at_Park',
      alt: 'A blocked dirt path with trees on each side',
    },
    {
      src: '/Nature/Cactus_at_Park',
      alt: 'A small patch of cactus with wood chips',
    },
    {
      src: '/Nature/Cement_Path_at_Sunset',
      alt: 'A cement path with trees and a sunset',
    },
    { src: '/Nature/Closeup_of_Cactus', alt: 'Closeup of some cactus' },
    {
      src: '/Nature/Closeup_of_Dried_Thistle',
      alt: 'Closeup of some dried thistle',
    },
    {
      src: '/Nature/Closeup_of_Golden_Thistle',
      alt: 'Closeup of some golden thistle',
    },
    {
      src: '/Nature/Closeup_of_Split_Tree_Trunk',
      alt: 'Closeup of a split tree trunk',
    },
    {
      src: '/Nature/Closeup_of_Thistle_or_Burdock',
      alt: 'Closeup of some thistle or perhaps burdock',
    },
    {
      src: '/Nature/Dead_Leaves_on_Ground_of_Park',
      alt: 'Dead leaves on a winter park ground with trees',
    },
    {
      src: '/Nature/Dirt_Path_at_Park',
      alt: 'Dirt path with mostly dead trees on each side',
    },
    {
      src: '/Nature/Dirt_Path_With_Trees_at_Park',
      alt: 'Wide shot of a dirt path with mostly dead trees',
    },
    {
      src: '/Nature/Dried_Plants_at_Sunset',
      alt: 'A field of mostly golden and dried plants at sunset',
    },
    {
      src: '/Nature/Dry_Brush_and_Trees_in_Early_Winter',
      alt: 'Some dry bush and trees in early winter',
    },
    {
      src: '/Nature/Fallen_Tree_in_Deciduous_Forest',
      alt: 'A fallen tree with dead leaves on the ground and other mostly dead trees',
    },
    {
      src: '/Nature/Golden_Bush_with_Blue_Sky',
      alt: 'Golden bushes with a blue sky background',
    },
    {
      src: '/Nature/Green_Path_at_Sunset',
      alt: 'A green path with dead trees, bushes, blue sky and the sun',
    },
    {
      src: '/Nature/Lone_Bush_on_Path',
      alt: 'Lone evergreen bush next to a cement path',
    },
    {
      src: '/Nature/Lone_Dead_Tree_Blue_Sky',
      alt: 'A lone dead tree with a blue sky background',
    },
    {
      src: '/Nature/Lone_Evergreen_at_Park',
      alt: 'Lone evergreen tree at a park with water and clouds in the background',
    },
    {
      src: '/Nature/Lone_Golden_Tree_at_Park',
      alt: 'A lone golden tree at a park with water and stormy clouds in the background',
    },
    {
      src: '/Nature/Mesquite_Tree_and_Red_Rocks',
      alt: 'A small mesquite tree behind some red rocks',
    },
    {
      src: '/Nature/Overcast_at_Winter_Park',
      alt: 'Some mostly dead trees in a park on an overcast day',
    },
    {
      src: '/Nature/Pine_Tree_by_Lake_with_Cloudy_Sky',
      alt: 'A pine tree at a park with water and stormy clouds in the background',
    },
    {
      src: '/Nature/Sunset_Above_Trees_and_Bushes',
      alt: 'A sunset above small green trees and bushes',
    },
    {
      src: '/Nature/Tall_Reeds_Against_Clear_Blue_Sky',
      alt: 'Closeup of tall reeds against a clear blue sky',
    },
    {
      src: '/Nature/Thick_Dead_Tree_Blue_Sky',
      alt: 'A thick dead tree with clear blue sky',
    },
    {
      src: '/Nature/Three_Dead_Trees_Early_Winter',
      alt: 'Three dead trees in a field with blue sky',
    },
    {
      src: '/Nature/Two_Dead_Trees_at_Park',
      alt: 'Two dead trees at a park with water and stormy clouds in the background',
    },
    {
      src: '/Nature/Wetland_Area_with_Bare_Trees',
      alt: 'Wetland area with bare trees on an overcast day',
    },
    {
      src: '/Nature/Young_Pine_Sapling_on_Forest_Floor',
      alt: 'Closeup of a young pine sapling in a park',
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
              layout='responsive'
              sizes='(min-width: 1540px) 1128px, (min-width: 1280px) 936px, (min-width: 1040px) 744px, (min-width: 780px) 552px, (min-width: 640px) 456px, (min-width: 400px) calc(100vw - 24px), (min-width: 360px) 336px, calc(50vw + 126px)'
              style={{
                objectFit: 'contain',
              }}
              width={3335}
              height={5000}
              placeholder='blur'
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
              }
            />
          </div>
        </div>
      )}

      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        Nature
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
              <p>In nature&apos;s embrace</p>
              <p>Whispers of the Earth caught still</p>
              <p>Time&apos;s dance in a trance</p>
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
                          sizes='(min-width: 1540px) 1128px, (min-width: 1280px) 936px, (min-width: 1040px) 744px, (min-width: 780px) 552px, (min-width: 640px) 456px, (min-width: 400px) calc(100vw - 24px), (min-width: 360px) 336px, calc(50vw + 126px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={3335}
                          height={5000}
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
                          sizes='(min-width: 1540px) 1128px, (min-width: 1280px) 936px, (min-width: 1040px) 744px, (min-width: 780px) 552px, (min-width: 640px) 456px, (min-width: 400px) calc(100vw - 24px), (min-width: 360px) 336px, calc(50vw + 126px)'
                          style={{
                            objectFit: 'contain',
                          }}
                          width={3335}
                          height={5000}
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

export default Nature;