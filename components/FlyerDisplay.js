import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FlyerDisplay() {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 800,
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="relative bg-cover bg-center bg-fixed bg-[#fe68c3] md:bg-[url('/images/ivy-bg-16x80.jpg')] lg:bg-[url('/images/ivy-bg-16x80.jpg')] pt-12 pb-8 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="hidden md:block lg:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      </div>
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* 3 flyers with ticket links: change back to lg:grid-cols-2 for only 2 flyers */}
        <div className="max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none pl-2 justify-center items-center justify-items-center place-items-center mt-3">
          <div>
            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="200"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/afterschoolclub.jpg"
                height={450}
                width={350}
                alt="Flyer 1"
                blurDataURL="/images/flyer-display/afterschoolclub.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="300"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/girl-scout-flyer.jpg"
                height={450}
                width={450}
                alt="Flyer 2"
                blurDataURL="/images/flyer-display/girl-scout-flyer.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="400"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/kids-party-flyer.jpg"
                height={450}
                width={450}
                alt="Flyer 3"
                blurDataURL="/images/flyer-display/kids-party-flyer.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>

          {/* lg:col-start-2 centers the fourth image */}
          {/* <div className="hover:scale-110 ease-in-out duration-200 lg:col-start-2">
            <Image
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/craftmenu.jpeg"
              height={450}
              width={350}
              alt="Flyer 4"
              blurDataURL="/images/flyer-display/craftmenu.jpeg"
              placeholder="blur"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
