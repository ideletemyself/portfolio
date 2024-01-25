"use client";

import { useEffect } from "react";

const Client: React.FC = () => {
  useEffect(() => {
    let link = document.querySelector("link[rel='mask-icon']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'mask-icon';
      link.href = 'https://brandonmckimmons-nextjs-563476088.imgix.net/safari-icon.svg';
      link.setAttribute('color', "#0217d6");
      document.head.appendChild(link);
    }
  }, []);

  return null;
}

export default Client;