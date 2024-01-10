import React, { useState, useEffect, useRef } from "react";

export default function YouTubeEmbed() {
  return (
    <div
      className="bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/images/ivy-bg-16x80.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-56">
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
