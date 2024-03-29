import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OGimage from '../public/images/others/OG-SunSky-1200x630.jpg';
import SafariIcon from '../public/images/others/safari-icon.svg';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brandon McKimmons Photo, Video, Music and Programming Portfolio',
  description:
    'Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.',
  icons: [
    {
      rel: 'mask-icon',
      url: SafariIcon.src,
      color: '#0217d6',
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL('https://brandonmckimmons.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:
      'Brandon Carrol McKimmons Photography, Video, Music and Software Portfolio Website',
    description:
      'Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.',
    url: 'https://brandonmckimmons.com/',
    siteName: 'brandonmckimmons.com',
    images: [
      {
        url: OGimage.src,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
        alt: 'Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ideletemyself',
    title:
      'Brandon Carrol McKimmons Photography, Video, Music and Software Portfolio Website',
    description:
      'Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.',
    creator: '@ideletemyself',
    images: [
      OGimage.src,
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <ScrollToTop />
      <GoogleAnalytics gaId="G-S3Y26H227T" />
    </html>
  );
}
