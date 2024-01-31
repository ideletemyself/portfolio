import Image from 'next/image';
import ImgixClient from '@imgix/js-core';

export default function About() {
  const images = [
    {
      src: 'Website/Me_Under_Colored_Lights',
      alt: 'A closeup of myself under colored lights.',
    },
    {
      src: 'Website/Sagan_Peering_Over_On_Blue_Sofa',
      alt: 'Sagan peering over the top corner of a blue sofa.',
    },
  ];

  const imgixClient = new ImgixClient({
    domain: 'brandonmckimmons-nextjs-563476088.imgix.net',
  });

  const imgUrl = (image: { src: string; alt: string }) =>
    imgixClient.buildURL(`${image.src}.webp`, {
      fit: 'fill', // fill mode
      auto: 'format,compress', // auto format and compress
      lossless: 1,
      // ... other Imgix parameters
    });

  return (
    <>
      <h1 className='bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta'>
        About Me
      </h1>
      <div className='flex flex-col w-full bg-behr-debonair-blue items-center py-4'>
        <div className='bg-behr-debonair-blue'>
          <div className='bg-behr-debonair-blue py-4'>
            <div className='flex flex-col px-0 sm:px-2 md:px-4 lg:px-16'>
              <article className='flex bg-very-light-brown rounded shadow-lg prose text-left font-light pb-6 px-0 sm:px-4 prose-img:rounded-full'>
                <div className='flex flex-col pl-2'>
                  <p className='flex prose text-slate-500 mt-6 sm:text-2xl'>
                    Born in Fullerton, California. Went to highschool at
                    Huntington Beach High School. Spent time in college at Full
                    Sail University. I&apos;ve always had a passion for
                    photography, music and programming.
                  </p>
                  <p className='flex prose text-slate-500 mt-6 sm:text-2xl'>
                    This is a picture of my cat, Sagan. He loves looking out
                    windows, laying down on laps and eating some cat treats.
                  </p>
                </div>
                <Image
                  className='flex flex-col place-self-center h-40 w-40 sm:h-64 sm:w-64 pr-4'
                  src={imgUrl(images[1])}
                  alt={images[1].alt}
                  width={4688}
                  height={3823}
                  placeholder='blur'
                  blurDataURL={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                  }
                />
              </article>
            </div>
          </div>
        </div>
        <div className='bg-behr-debonair-blue py-8 px-0 sm:px-2 md:px-4'>
          <div className='flex flex-col px-0 sm:px-0 md:px-0 lg:px-12'>
            <article className='flex bg-very-light-brown rounded shadow-lg prose text-left font-light pl-4 pt-8 prose-img:rounded-full items-center'>
              <Image
                className='flex flex-col px-2 h-40 w-40 sm:h-64 sm:w-64'
                src={imgUrl(images[0])}
                alt={images[0].alt}
                width={5997}
                height={4000}
                placeholder='blur'
                blurDataURL={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
                }
              />
              <div className='flex flex-col'>
                <p className='flex text-base sm:text-3xl font-semibold leading-4 tracking-tight text-slate-500'>
                  Brandon McKimmons
                </p>
                <p className='flex text-[13px] sm:text-lg pr-2 sm:pr-0 font-semibold leading-4 text-med-light-magenta'>
                  Photographer, Programmer and Music Producer
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
