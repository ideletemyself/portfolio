import withMDX from '@next/mdx';
import withPlaiceholder from '@plaiceholder/next';

const mdx = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brandonmckimmons-nextjs-563476088.imgix.net',
      },
    ],
  },
};

export default withPlaiceholder(mdx(nextConfig));
