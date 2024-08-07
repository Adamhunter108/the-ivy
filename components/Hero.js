import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 800,
      easing: "ease-out-sine",
    });
  });

  return (
    <div>
      <div className="relative pt-32 pb-12 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
          style={{
            backgroundImage: "url('/images/ivy-wall-16x80.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-30 bg-black"
          ></span>
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              {/* <div className="hover:scale-125 ease-in-out duration-200"> */}
              <div data-aos="fade-up" data-aos-delay="300" className="mb-2">
                <Image
                  src="/images/theivycolorlogo-circle.png"
                  width={325}
                  height={325}
                  alt="The Ivy"
                  blurDataURL="/images/the-ivy-neon.png"
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="py-3 px-1 bg-neon-pink/90 rounded-2xl sm:py-10 sm:px-10 lg:p-5 lg:items-center">
                <p className="text-white text-lg lg:text-xl font-extralight">
                  We are The Ivy on Beech Street. A Funky, Fun and Unique Gift
                  Shop in the Heart of Long Beach, NY! We also specialize in
                  Craft Classes, Creative Workshops, Private Events and Birthday
                  Parties!
                </p>
                <p className="text-white text-lg lg:text-xl font-extralight pt-2">
                  The Ivy is a place to disconnect from life&apos;s daily
                  struggles into a calming vibe with your creative spirit. We
                  love collaborating with other companies, brands and small
                  businesses. So if you wanna connect - please send us an{" "}
                  <a
                    href="mailto:theivylbny@gmail"
                    className="text-green-400 hover:text-green-700"
                  >
                    email
                  </a>{" "}
                  to reach out! We look forward to seeing you soon.
                </p>
              </div>

              {/* <div className="flex flex-col justify-center items-center">
                  <Link href="/event-list">
                    <a className="flex flex-row">
                      <button
                        type="button"
                        className="px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                      >  
                        SEE ALL EVENTS & PURCHASE TICKETS
                        <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        </div>
                      </button>
                    </a>
                  </Link>
                </div> */}
            </div>
          </div>
        </div>
        {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div> */}
      </div>
    </div>
  );
}
