import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brandon Carrol McKimmons Photography, Video, Music and Software Portfolio Website",
  description: "Brandon McKimmons Portfolio, talking about and showing off my photography, programming and music production. I also have a blog where I talk about various related topics.",
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
