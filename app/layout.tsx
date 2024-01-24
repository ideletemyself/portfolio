import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImgixClient from "@imgix/js-core";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const images = [
  'OG-SunSky-1200x630.jpg',
  'OG-SunSky-600x315.jpg',
];

const imgixClient = new ImgixClient({
  domain: 'brandonmckimmons-nextjs-563476088.imgix.net'
});

const imgUrl = (imagePath: string) => imgixClient.buildURL(`${imagePath}.webp`, {
  fit: 'fill', // fill mode
  auto: 'format,compress', // auto format and compress
  lossless: 1,
  // ... other Imgix parameters
});

export const metadata: Metadata = {
  title: "Brandon Carrol McKimmons Photography, Video, Music and Software Portfolio Website",
  description: "Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  metadataBase: new URL('https://brandonmckimmons.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Brandon Carrol McKimmons Photography, Video, Music and Software Portfolio Website',
    description: 'Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.',
    url: 'https://brandonmckimmons.com/',
    siteName: 'brandonmckimmons.com',
    images: [
      {
        url: imgUrl(images[0]),
        width: 1200,
        height: 630,
      },
      {
        url: imgUrl(images[1]),
        width: 600,
        height: 315,
        alt: 'Minimum size is 600x315px',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
