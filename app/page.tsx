

import Image from "next/image";
import ImgixClient from "@imgix/js-core";
import Link from "next/link";
import Hero from "./components/Hero";

const Home: React.FC = () => {
  const images = [
    "DSC01836_small",
    "DSC01776_small",
    "DSC01225_smaller",
    "DSC01586_small",
  ];

  const imgixClient = new ImgixClient({
    domain: "brandonmckimmons-nextjs-563476088.imgix.net",
  });

  const imgUrl = (imagePath: string) =>
    imgixClient.buildURL(`${imagePath}.webp`, {
      fit: "fill", // fill mode
      auto: "format,compress", // auto format and compress
      lossless: 1,
      // ... other Imgix parameters
    });

  return (
    <>
      <Hero
        title="Brandon McKimmons"
        subtitle="Photography, Programming & Producing Music"
      />

      <div className="bg-behr-debonair-blue py-8">
        <div
          id="hiku"
          className="bg-behr-debonair-blue flex flex-wrap justify-center py-8"
        >
          <article
            className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-slate-500 text-2xl sm:max-xl:text-4xl xl:text-5xl py-8 px-4"
          >
            <p>Software, lens and sound</p>
            <p>Crafting new in harmony</p>
            <p>Art blooms all around</p>
          </article>
        </div>
      </div>

      <div className="bg-behr-debonair-blue py-8">
        <div
          id="front-page-text-top"
          className="bg-behr-debonair-blue flex flex-wrap justify-center py-8"
        >
          <article
            className="bg-very-light-brown rounded shadow-lg relative prose prose-xl sm:prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4"
          >
            <p>
              Welcome to my site. I&apos;m a software developer, photographer,
              videographer and musician. Here you&apos;ll find my photography,
              videos, music and software projects. Projects like this very website and
              blog. Enjoy your stay and please come back as I&apos;ll be adding
              more content as I create it.
            </p>
          </article>
        </div>
      </div>

      <div className="flex flex-col bg-behr-debonair-blue py-2 px-4 sm:px-20">
        <main className="flex flex-col w-full text-center items-center py-4">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center">
            <Link
              href="/astrophotography"
              className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2"
            >
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image
                    className="w-full rounded"
                    src={imgUrl(images[0])}
                    sizes="(min-width: 1240px) 352px, (min-width: 1040px) calc(25vw + 47px), (min-width: 780px) calc(33.75vw - 96px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw"
                    alt="Astrophotography"
                    width={353}
                    height={233}
                    placeholder="blur"
                    blurDataURL={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    }
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-2xl md:text-base lg:text-2xl xl:text-3xl text-med-light-magenta mb-2">
                    Astrophotography
                  </p>
                  <article className="subpixel-antialiased lg:pr-0 lg:text-center sm:text-lg md:text-lg md:text-left md:pr-16 lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75">
                    Astrophotography photos I&apos;ve taken so far.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href="/nature"
              className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2"
            >
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image
                    className="w-full rounded"
                    src={imgUrl(images[1])}
                    sizes="(min-width: 1300px) 304px, (min-width: 1040px) calc(32.5vw - 112px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw"
                    alt="Animals"
                    width={353}
                    height={233}
                    placeholder="blur"
                    blurDataURL={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    }
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">
                    Nature
                  </p>
                  <article className="subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75">
                    Nature photos, or something close to nature.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href="/animals"
              className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2"
            >
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image
                    className="w-full rounded"
                    src={imgUrl(images[2])}
                    sizes="(min-width: 1300px) 304px, (min-width: 1040px) calc(32.08vw - 107px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw"
                    alt="Animals"
                    width={353}
                    height={233}
                    placeholder="blur"
                    blurDataURL={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    }
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">
                    Animals
                  </p>
                  <article className="subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75">
                    Photos of animals I&apos;ve been able to snap.
                  </article>
                </div>
              </div>
            </Link>

            <Link
              href="/sagan"
              className="max-w-sm bg-very-light-brown rounded overflow-hidden shadow-lg mb-4 mr-2"
            >
              <div className="flex flex-col max-w-4xl mt-2 sm:w-full">
                <div className="px-4 py-4">
                  <Image
                    className="w-full rounded"
                    src={imgUrl(images[3])}
                    sizes="(min-width: 1300px) 304px, (min-width: 1040px) calc(32.08vw - 107px), (min-width: 780px) calc(33.33vw - 94px), (min-width: 640px) 306px, (min-width: 380px) 274px, 76.67vw"
                    alt="Sagan"
                    width={353}
                    height={235}
                    placeholder="blur"
                    blurDataURL={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    }
                  />
                  <p className="subpixel-antialiased underline decoration-solid font-bold text-2xl sm:text-3xl text-med-light-magenta mb-2">
                    Sagan
                  </p>
                  <article className="subpixel-antialiased text-lg sm:text-xl lg:text-2xl xl:text-2xl text-slate-500 text-opacity-75">
                    Collections of photos of my cat, Sagan.
                  </article>
                </div>
              </div>
            </Link>
          </div>
          <div className="bg-behr-debonair-blue py-8">
            <div
              id="front-page-text-bottom"
              className="bg-behr-debonair-blue flex flex-wrap justify-center py-8"
            >
              <article
                className="bg-very-light-brown rounded shadow-lg relative prose prose-xl sm:prose-2xl 
                                    text-left font-light text-slate-500 py-8 px-4"
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
