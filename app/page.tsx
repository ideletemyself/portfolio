import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';


const Home: React.FC = () => {
  const astroImage = 'https://brandonmckimmons-nextjs-563476088.imgix.net/DSC01836.webp';
  const animalImage = 'https://brandonmckimmons-nextjs-563476088.imgix.net/DSC01225.webp';
  const natureImage = 'https://brandonmckimmons-nextjs-563476088.imgix.net/DSC01776.webp';

  return (
    <>
      <Hero
        title="Brandon McKimmons"
        subtitle="Photography, Programming & Producing Music"
        backgroundImage="https://brandonmckimmons-nextjs-563476088.imgix.net/DSC01612-hero.webp"
      />

      <div className='bg-behr-debonair-blue py-8'>
        <div id='hiku' className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
          <article className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4">
            <p>
              Software, lens and sound
            </p>
            <p>
              Crafting new in harmony
            </p>
            <p>
              Art blooms all around
            </p>
          </article>
        </div>
      </div>

      <div className="flex flex-col bg-behr-debonair-blue py-2 px-4 sm:px-20">

        <main className="flex flex-col w-full text-center items-center py-4">

          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center">

            <Link href="/astrophotography" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={astroImage}
                    alt="Astrophotography"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl text-med-light-magenta mb-2">Astrophotography</p>
                  <article className="subpixel-antialiased sm:text-lg md:text-lg lg:text-2xl xl:text-2xl text-zinc-900 text-opacity-75">
                    My collections of astrophotography.
                  </article>
                </div>
              </div>
            </Link>

            <Link href="/nature" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={natureImage}
                    alt="Animals"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">Nature</p>
                  <article className="subpixel-antialiased text-lg sm:text-xl text-zinc-900 text-opacity-75">
                    My collections of nature photos.
                  </article>
                </div>
              </div>
            </Link>

            <Link href="/animals" className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2">
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image className="w-full rounded"
                    src={animalImage}
                    alt="Animals"
                    width={500}
                    height={300}
                    placeholder="blur"
                    blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='}
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">Animals</p>
                  <article className="subpixel-antialiased text-lg sm:text-xl text-zinc-900 text-opacity-75">
                    My collections of animal photos.
                  </article>
                </div>
              </div>
            </Link>
          </div>
          <div className='bg-behr-debonair-blue py-8'>
            <div id='hiku' className='bg-behr-debonair-blue flex flex-wrap justify-center py-8'>
              <article className="bg-very-light-brown rounded shadow-lg relative prose prose-xl sm:prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4">
                <p>
                  Ever since highschool I&apos;ve loved photography. I was lucky enough to go to a school with a photography class.
                  We used film and developed our own photos. I learned a lot about the process and how to take a good photo. I&apos;ve
                  had various cameras but only recently have I had what I consider to be a really good, professional camera. 
                </p>
                <p>  
                  It&apos;s a Sony A7iv and I absolutely love it. I&apos;ve been taking photos of everything I can, mostly of my cat Sagan but also
                  of the nature around me, some animals that I can find here and there and of course the night sky. I hope you&apos;ll take
                  a look at some of my photos and enjoy them as much as I do.
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