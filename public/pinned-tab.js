'use client';

import { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    let link = document.querySelector("link[rel='mask-icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'mask-icon';
      link.href = 'https://brandonmckimmons-nextjs-563476088.imgix.net/safari-icon.svg';
      link.color = "#0217d6";
      document.head.appendChild(link);
    }
  }, []);

  return null;
}