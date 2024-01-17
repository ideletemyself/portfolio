import Image from "next/image";

export default function About() {
  return (
    <>
      <h1 className="bg-behr-debonair-blue subpixel-antialiased underline decoration-solid font-bold text-center text-4xl sm:text-6xl py-8 text-med-light-magenta">
        About Me
      </h1>
      <div className="flex flex-col w-full bg-behr-debonair-blue items-center py-4">
        <div className="bg-behr-debonair-blue">
          <div className="bg-behr-debonair-blue flex flex-wrap justify-center py-4">
            <article
              className="bg-very-light-brown rounded shadow-lg relative prose text-left font-light 
                        text-2xl sm:max-xl:text-4xl xl:text-5xl pb-6 px-4"
            >
              <p className="prose text-slate-500 mt-6 text-lg leading-8">
                Born in Fullerton, California. Went to highschool at Huntington
                Beach High School. Spent time in college at Full Sail
                University. I&apos;ve always had a passion for photography,
                music and programming.
              </p>
            </article>
          </div>
        </div>
        <div className="bg-behr-debonair-blue py-8">
          <div
            className="bg-very-light-brown rounded shadow-lg prose text-left font-light 
                        text-2xl sm:max-xl:text-4xl xl:text-5xl px-14"
          >
            <div className="flex flex-wrap items-center gap-x-6">
              <Image
                className="h-64 w-64 rounded-full"
                src="/images/photos/DSC01559-smaller.webp"
                width={5997}
                height={4000}
                alt=""
                placeholder="blur"
                blurDataURL={'/images/photos/DSC01836_small.webp'}
              />
              <div>
                <h1 className="text-2xl font-semibold leading-7 tracking-tight text-slate-500">
                  Brandon McKimmons
                </h1>
                <p className="text-xl font-semibold leading-6 text-med-light-magenta">
                  Photographer, Programmer and Music Producer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
