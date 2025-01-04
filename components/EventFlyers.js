import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    imagePath: "/images/flyer-display/1-21-25.jpg",
    ticketLink: "https://square.link/u/cBNFTRw2",
    ticketTitle: "Sip N Paint @ Bright Eye",
  },
  {
    imagePath: "/images/flyer-display/1-18-25.jpg",
    ticketLink: "https://square.link/u/VGDpL1tU",
    ticketTitle: "Paint Night: The Poof",
  },
];

export default function EventFlyers() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-sine",
    });
  });

  return (
    <div
      id="events"
      className="relative bg-cover bg-center bg-fixed bg-[#fe68c3] md:bg-[url('/images/ivy-bg-16x80.jpg')] lg:bg-[url('/images/ivy-bg-16x80.jpg')] pt-12 mt-2 pb-8 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8"
    >
      <div className="hidden md:block lg:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>

      <div className="mt-8 flex flex-wrap justify-center mb-6 md:space-x-12 space-y-4 md:space-y-0">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center mb-6">
            <a
              href={event.ticketLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center drop-shadow-lg"
            >
              <Image
                src={event.imagePath}
                alt={`${event.ticketTitle} Flyer`}
                width={400}
                height={400}
                className="rounded-md"
              />
              <button
                type="button"
                className="z-30 px-3.5 mt-4 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
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
                <div className="pl-3">{event.ticketTitle}</div>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
