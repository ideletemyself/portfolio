const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'brandonmckimmons-nextjs-563476088.imgix.net',
        }, ],
    },
}

module.exports = withMDX(nextConfig)