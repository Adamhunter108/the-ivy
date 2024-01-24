import React, { useState, useEffect, useRef } from "react";

export default function YouTubeEmbed() {
  return (
    <div className="relative bg-cover bg-center bg-fixed bg-[#fe68c3] md:bg-[url('/images/ivy-bg-16x80.jpg')] lg:bg-[url('/images/ivy-bg-16x80.jpg')] pt-12 pb-8 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="hidden md:block lg:block absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-56">
        <div className="py-4 px-4 bg-neon-pink rounded-3xl flex items-center justify-center sm:py-16 sm:px-4 lg:p-12">
          <div className="w-full flex justify-center">
            <iframe
              width="580"
              height="335"
              src="https://youtube.com/embed/So3g3VE6Ung"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        ></div>
      </div>
    </div>
  );
}
