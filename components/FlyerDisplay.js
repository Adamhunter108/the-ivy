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
        {/* A SINGLE FLYER */}
        {/* <div className="flex justify-center mb-6">
          <a
            href="https://square.link/u/imlZIIkA?src=sheet"
            className="flex flex-row"
          >
            <button
              type="button"
              className="z-50 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              <div className="pl-3">Tickets for Elevate & Create</div>
            </button>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/12-1-23.jpg"
              height={450}
              width={350}
              alt="Flyer 1"
              blurDataURL="/images/flyer-display/12-1-23.jpg"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div> */}

        {/* <div className="flex justify-center">
          <p className="text-gray-800 text-md font-thin">
            See all events below
          </p>
        </div> */}

        {/* 2 flyers - no ticket links */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-12">
          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/girl-scout-flyer.jpg"
              height={450}
              width={450}
              alt="Flyer 1"
              blurDataURL="/images/flyer-display/girl-scout-flyer.jpg"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/playfuldoodlepartyplanner.jpg"
              height={450}
              width={350}
              alt="Flyer 2"
              blurDataURL="/images/flyer-display/playfuldoodlepartyplanner.jpg"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3 flyers with ticket links: change back to lg:grid-cols-3 */}
        <div className="max-w-lg mx-auto grid gap-10 lg:grid-cols-2 lg:max-w-none pl-2 justify-center items-center justify-items-center place-items-center mt-3">
          {/* <div>
            <div className="flex justify-center mb-6">
              <a
                href="https://checkout.square.site/merchant/MLBBZDHF0Y11Z/checkout/VIXGE4AXMV2CA7CD3FUS3VBJ"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row"
              >
                <button
                  type="button"
                  className="z-30 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <div className="pl-3">Craft & Sip: Vision Board</div>
                </button>
              </a>
            </div>
            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="200"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/1-30-24.jpg"
                height={450}
                width={350}
                alt="Flyer 1"
                blurDataURL="/images/flyer-display/1-30-24.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-center mb-6">
              <a
                href="https://square.link/u/SHX4LYvc"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row"
              >
                <button
                  type="button"
                  className="z-30 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <div className="pl-3">Sip & Paint: Glow in the Dark</div>
                </button>
              </a>
            </div>

            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="300"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/1-31-24.png"
                height={450}
                width={350}
                alt="Flyer 2"
                blurDataURL="/images/flyer-display/1-31-24.png"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div> */}

          {/* <div>
            <div className="flex justify-center mb-6">
              <a
                href="https://square.link/u/SHX4LYvc?src=sheet"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row"
              >
                <button
                  type="button"
                  className="z-30 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <div className="pl-3">Sip & Paint BYOB</div>
                </button>
              </a>
            </div>

            <div className="hover:scale-110 ease-in-out duration-200">
              <Image
                data-aos="fade-up"
                data-aos-delay="400"
                className="max-w-full h-auto rounded-xl"
                src="/images/flyer-display/12-14-23.jpg"
                height={450}
                width={350}
                alt="Flyer 3"
                blurDataURL="/images/flyer-display/12-14-23.jpg"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div> */}

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
