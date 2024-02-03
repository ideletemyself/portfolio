const { ModuleResolutionKind } = require('typescript');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
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

module.exports = withBundleAnalyzer(withMDX(nextConfig));