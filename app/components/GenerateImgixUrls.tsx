import ImgixClient from '@imgix/js-core';

interface Image {
  src: string;
  alt: string;
}

// Initialize your Imgix client with TypeScript type assertions if needed
const imgixClient = new ImgixClient({
  domain: 'brandonmckimmons-nextjs-563476088.imgix.net',
});

/**
 * Generates Imgix URLs for each image in the given array.
 * @param {Image[]} images - An array of image objects to process.
 * @return {Image[]} An array of image objects with Imgix URLs.
 */
const generateImgUrls = (images: Image[]): Image[] => {
  return images.map(image => ({
    ...image,
    src: imgixClient.buildURL(`${image.src}.webp`, {
      fit: 'fill',
      auto: 'format,compress',
      lossless: 1,
      // Add other Imgix parameters as needed
    }),
  }));
};

export default generateImgUrls;