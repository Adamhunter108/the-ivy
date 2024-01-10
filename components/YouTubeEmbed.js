import React, { useState, useEffect, useRef } from "react";

export default function YouTubeEmbed() {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/images/ivy-bg-16x80.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="py-10 px-6 bg-neon-pink rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          {/* <p className="text-white">Video goes here</p> */}
          {/* <div>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/shorts/So3g3VE6Ung"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          <div ref={videoRef}>
            {load ? (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/shorts/So3g3VE6Ung`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div>Loading...</div>
            )}
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
