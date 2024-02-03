"use client";

import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';

interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imgixLoader = ({ src, width, quality }: LoaderProps) => {
  const url = new URL(`https://brandonmckimmons-nextjs-563476088.imgix.net${src}`);
  const params = url.searchParams;
  params.set(
    'auto',
    params.getAll('auto').concat(['format', 'compress']).join(',')
  );
  params.set('fit', 'fill');
  params.set('w', params.get('w') || width.toString());
  params.set('h', params.get('h') || width.toString());
  return url.href;
}

const Home: React.FC = () => {
  const images = [
    {
      src: '/Astrophotography/Blue_Orion_Shot1_Small.webp',
      alt: 'The constellation Orion with a blue hue. Small version.',
    },
    {
      src: '/Nature/Green_Path_at_Sunset_Small.webp',
      alt: 'A green path at sunset with a blue sky. Small version.',
    },
    {
      src: '/Animals/Green_Parrot_On_Branch_Small.webp',
      alt: 'A green parrot trying to get attention on a branch. Small version.',
    },
    {
      src: '/Sagan/Sagan_Yawning_On_Blue_Sofa_Small.webp',
      alt: 'Sagan yawning on the top of a blue sofa. Small version.',
    },
    {
      src: '/Blog/blog-writing.webp',
      alt: 'A colorful illustration of a desk with a laptop and other things on it.',
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Hero
        title='Brandon McKimmons'
        subtitle='Photography, Programming & Producing Music'
      />

      <div className='bg-behr-debonair-blue py-8'>
        <div
          id='hiku'
          className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'
        >
          <article
            className='bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4'
          >
            <p>Software, lens and sound</p>
            <p>Crafting new in harmony</p>
            <p>Art blooms all around</p>
          </article>
        </div>
      </div>

      <div className='bg-behr-debonair-blue py-8'>
        <div
          id='front-page-text-top'
          className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'
        >
          <article
            className='bg-very-light-brown rounded shadow-lg relative prose prose-xl sm:prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4'
          >
            <p>
              Welcome to my site. I&apos;m a software developer, photographer,
              videographer and musician. Here you&apos;ll find my photography,
              videos, music and software projects. Projects like this very
              website and blog. Enjoy your stay and please come back as
              I&apos;ll be adding more content as I create it.
            </p>
          </article>
        </div>
      </div>

      <div className='flex flex-col bg-behr-debonair-blue py-2 px-4 sm:px-20'>
        <main className='flex flex-col w-full text-center items-center py-4'>
          <div className='flex flex-wrap md:flex-row lg:flex-row xl:flex-row justify-center'>
            <Link
              href='/astrophotography'
              className='max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2'
            >
              <div className='flex flex-col max-w-4xl mt-2 sm:w-full'>
                <div className='px-4 py-4'>
                  <Image
                    className='w-full rounded'
                    src={images[0].src}
                    alt={images[0].alt}
                    loader={imgixLoader}
                    sizes='(min-width: 1240px) 352px, (min-width: 1040px) calc(25vw + 47px), (min-width: 780px) calc(33.75vw - 96px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw'
                    width={353}
                    height={233}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />
                  <p className='subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-2xl md:text-base lg:text-2xl xl:text-3xl text-med-light-magenta mb-2'>
                    Astrophotography
                  </p>
                  <article className='subpixel-antialiased lg:pr-0 lg:text-center sm:text-lg md:text-lg md:text-left md:pr-16 lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75'>
                    Astrophotography photos I&apos;ve taken so far.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href='/nature'
              className='max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2'
            >
              <div className='flex flex-col max-w-4xl mt-2 sm:w-full'>
                <div className='px-4 py-4'>
                  <Image
                    className='w-full rounded'
                    src={images[1].src}
                    alt={images[1].alt}
                    loader={imgixLoader}
                    sizes='(min-width: 1300px) 304px, (min-width: 1040px) calc(32.5vw - 112px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw'
                    width={353}
                    height={233}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />
                  <p className='subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2'>
                    Nature
                  </p>
                  <article className='subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75'>
                    Nature photos, or something close to nature.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href='/animals'
              className='max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2'
            >
              <div className='flex flex-col max-w-4xl mt-2 sm:w-full'>
                <div className='px-4 py-4'>
                  <Image
                    className='w-full rounded'
                    src={images[2].src}
                    alt={images[2].alt}
                    loader={imgixLoader}
                    sizes='(min-width: 1300px) 304px, (min-width: 1040px) calc(32.08vw - 107px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw'
                    width={353}
                    height={233}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />
                  <p className='subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2'>
                    Animals
                  </p>
                  <article className='subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75'>
                    Photos of animals I&apos;ve been able to snap.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href='/sagan'
              className='max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2'
            >
              <div className='flex flex-col max-w-4xl mt-2 sm:w-full'>
                <div className='px-4 py-4'>
                  <Image
                    className='w-full rounded'
                    src={images[3].src}
                    alt={images[3].alt}
                    loader={imgixLoader}
                    sizes='(min-width: 1300px) 304px, (min-width: 1040px) calc(32.08vw - 107px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw'
                    width={353}
                    height={235}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />
                  <p className='subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2'>
                    Sagan
                  </p>
                  <article className='subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75'>
                    Collections of photos of my cat, Sagan.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href='/blog'
              className='max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2'
            >
              <div className='flex flex-col max-w-4xl mt-2 sm:w-full'>
                <div className='px-4 py-4'>
                  <Image
                    className='w-full rounded'
                    src={images[4].src}
                    alt={images[4].alt}
                    loader={imgixLoader}
                    sizes='(min-width: 1300px) 304px, (min-width: 1040px) calc(32.08vw - 107px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw'
                    width={353}
                    height={235}
                    placeholder='blur'
                    blurDataURL={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                    }
                  />
                  <p className='subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2'>
                    The Blog
                  </p>
                  <article className='subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75'>
                    My blog articles on various things this site covers.
                  </article>
                </div>
              </div>
            </Link>
          </div>
          <div className='bg-behr-debonair-blue py-8'>
            <div
              id='front-page-text-bottom'
              className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'
            >
              <article
                className='bg-very-light-brown rounded shadow-lg relative prose prose-xl sm:prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4'
              >
                <p>
                  Ever since highschool I&apos;ve loved photography. I was lucky
                  enough to go to a school with a photography class. We used
                  film and developed our own photos. I learned a lot about the
                  process and how to take a good photo. I&apos;ve had various
                  cameras but only recently have I had what I consider to be a
                  really good, professional camera.
                </p>
                <p>
                  It&apos;s a Sony A7iv and I absolutely love it. I&apos;ve been
                  taking photos of everything I can, mostly of my cat Sagan but
                  also of the nature around me, some animals that I can find
                  here and there and of course the night sky. I hope you&apos;ll
                  take a look at some of my photos and enjoy them as much as I
                  do.
                </p>
              </article>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
