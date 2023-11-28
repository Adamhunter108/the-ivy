import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/carousel/insideshop1.jpg",
  },
  {
    id: 2,
    src: "/images/carousel/insideshop2.jpg",
  },
  {
    id: 3,
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
        <div className="embla__slide">
          <Image
            className="w-full h-auto rounded-xl"
            src="/images/carousel/insideshop1.jpg"
            height={650}
            width={1000}
            alt="Image 1"
            blurDataURL="/images/carousel/insideshop1.jpg"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="w-full h-auto rounded-xl"
            src="/images/carousel/insideshop2.jpg"
            height={650}
            width={1000}
            alt="Image 2"
            blurDataURL="/images/carousel/insideshop2.jpg"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="embla__slide">
          <Image
            className="w-full h-auto rounded-xl"
            src="/images/carousel/insideshop3.jpg"
            height={650}
            width={1000}
            alt="Image 3"
            blurDataURL="/images/carousel/insideshop3.jpg"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );

  // 👇 Started prev & next arrows
  // return (
  //     <div className="embla">
  //         <div className="embla__container" ref={emblaRef}>

  //             <div className="embla__slide">
  //                 <Image
  //                 className="max-w-full h-auto rounded-xl"
  //                 src="/images/carousel/insideshop1.jpg"
  //                 height={550}
  //                 width={850}
  //                 alt="Flyer 1"
  //                 blurDataURL="/images/carousel/insideshop1.jpg"
  //                 placeholder="blur"
  //                 loading="lazy"
  //                 />
  //             </div>
  //             <div className="embla__slide">
  //                 <Image
  //                 className="max-w-full h-auto rounded-xl"
  //                 src="/images/carousel/insideshop2.jpg"
  //                 height={550}
  //                 width={850}
  //                 alt="Flyer 1"
  //                 blurDataURL="/images/carousel/insideshop2.jpg"
  //                 placeholder="blur"
  //                 loading="lazy"
  //                 />
  //             </div>
  //             <div className="embla__slide">
  //                 <Image
  //                 className="max-w-full h-auto rounded-xl"
  //                 src="/images/carousel/insideshop3.jpg"
  //                 height={550}
  //                 width={850}
  //                 alt="Flyer 1"
  //                 blurDataURL="/images/carousel/insideshop3.jpg"
  //                 placeholder="blur"
  //                 loading="lazy"
  //                 />
  //             </div>

  //         </div>
  //         <button
  //             className={`embla__button embla__button--prev ${prevBtnEnabled ? "" : "is-disabled"}`}
  //             onClick={scrollPrev}
  //             disabled={!prevBtnEnabled}
  //             aria-label="Previous slide"
  //         >
  //             <PrevArrow />
  //         </button>
  //         <button
  //             className={`embla__button embla__button--next ${nextBtnEnabled ? "" : "is-disabled"}`}
  //             onClick={scrollNext}
  //             disabled={!nextBtnEnabled}
  //             aria-label="Next slide"
  //         >
  //             <NextArrow />
  //         </button>
  //     </div>
  // );
};
