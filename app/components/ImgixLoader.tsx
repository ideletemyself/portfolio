import ImgixClient from '@imgix/js-core';

const imgixClient = new ImgixClient({
  domain: 'brandonmckimmons-nextjs-563476088.imgix.net',
});

export const imgixLoader = (
  images: { src: string; alt: string; blurHash: string }[]
) => {
  const imagePromises = images.map(async (image) => {
    const url = imgixClient.buildURL(`${image.src}.webp`, {
      fit: 'fill', // fill mode
      auto: 'format,compress', // auto format and compress
      lossless: 1,
      // ... other Imgix parameters
    });

    const blurhashUrl = imgixClient.buildURL(`${image.src}.webp`, {
      fm: 'blurhash',
    });

    console.log(url); // Log the url
    console.log(`Fetching blurhash from: ${blurhashUrl}`); // Log the blurhashUrl

    const response = await fetch(blurhashUrl);
    const blurHash = await response.text();

    console.log(`Received blurhash: ${blurHash}`); // Log the received blurhash

    return { url, alt: image.alt, blurHash }; // Corrected here
  });

  return Promise.all(imagePromises);
};
