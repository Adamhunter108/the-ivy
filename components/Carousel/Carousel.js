import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/carousel/1.jpg",
  },
  {
    id: 2,
    src: "/images/carousel/2.jpg",
  },
  {
    id: 3,
    src: "/images/carousel/3.jpg",
  },
  {
    id: 4,
    src: "/images/carousel/4.jpg",
  },
  {
    id: 5,
    src: "/images/carousel/5.jpg",
  },
  {
    id: 6,
    src: "/images/carousel/6.jpg",
  },
  {
    id: 7,
    src: "/images/carousel/7.jpg",
  },
  {
    id: 8,
    src: "/images/carousel/insideshop1.jpg",
  },
  {
    id: 9,
    src: "/images/carousel/insideshop2.jpg",
  },
  {
    id: 10,
    src: "/images/carousel/insideshop3.jpg",
  },
];

export const EmblaCarousel = () => {
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="embla mx-auto max-w-screen-lg w-full" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image) => (
          <div key={image.id} className="embla__slide">
            <Image
              className="w-full h-auto rounded-xl"
              src={`${image.src}`}
              height={650}
              width={1000}
              alt={`Image ${image.id}`}
              blurDataURL={`${image.src}`}
              placeholder="blur"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
