import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-sine",
    });
  });

  return (
    <div>
      <Head>
        <title>The Ivy LBNY</title>
        <meta name="description" content="About The Ivy LBNY" />
        {/* <meta
          property="og:image"
          content="https://www.theivylbny.com/images/theivycolorlogo-circle.png"
          key="ogimage"
        /> */}
      </Head>
      <Nav />
      {/* HERO */}
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
      {/* BODY */}
      <div className="mx-6 md:mx-60 mt-10">
        <p className="pt-4 indent-6">
          The Ivy opened its doors in Long Beach, NY Of September 2022 and has
          been a thriving force of the community since its grand opening. In
          short The Ivy is a craft studio and funky gift shop. But in actuality
          it&apos;s so much more. It is my imagination brought to life!
        </p>
        <p className="pt-4 indent-6">
          The Ivy is not just a store - it&apos;s a vibe. It&apos;s a place to
          disconnect from life&apos;s daily grind and reconnect with yourself
          and your creative spirit. It is art therapy, retail therapy and self
          care all in one. During these wild times, so many people are suffering
          with mental health issues and depression - I praise The Ivy on being a
          place that evokes joy, laughter, hope and creativity.
        </p>
        <p className="pt-4 indent-6">
          At The Ivy, we craft.. and we craft hard! We offer various crafts for
          kids and adults. Some of the craft classes we offer are, tie-dye,
          candle making, make your own jewelry, create a garden terrarium,
          vision boarding, sip and paint, paint your own wine glass and much
          more! As well as projects for different themes, seasons and holidays!
          We offer art classes daily, birthday parties, themed events,
          networking events, business collaborations and so much more! We
          recently installed a 200 inch projector screen for movie nights,
          karaoke, open mic and trivia nights too.
        </p>
        <p className="pt-4 indent-6">
          The Ivy is not just an event space - It is also a groovy and funky
          gift shop. We sell all types of merchandise for every demographic.
          Custom Tie-Dye apparel, Graphic tees, framed art, incredible home
          decor, crystal and chakra jewelry, candles, tapestries and everything
          in between! The store from head to toe is designed in vibrant color,
          hanging Ivy and plants, fun decor, wow factor and a touch of magic. It
          is a 90s teen bedroom made for the new generation. No matter what your
          age is, this store will make you feel inspired, nostalgic and in awe
          all in one.
        </p>
        <p className="pt-4 indent-6">
          Growing up with my own mental health issues and ADHD - art, music and
          creative expression was one of my greatest coping mechanisms and
          helped me with my own personal demons. The store pays homage to my
          younger self, a little girl who didn&apos;t always know if she would
          have a place in this world. A free spirited child who went her own way
          before she even knew which way she was going. That little girl
          believed in magic and still holds such a big place in my heart, where
          her light is strong and her imagination and creativity run wild.
        </p>
        <p className="pt-4 indent-6">
          During the 2 years since the stores opening - I have collaborated with
          many businesses in Long Island as well as different artists and
          creatives. I have also won a very distinguished award from the city of
          Long Beach as being a top business of the arts. I was honored at a
          beautiful gala in Long Beach and was given an award and speech
          dedicated to me and my store. I dedicate The Ivy to my younger self
          and to every kid and adult who also has a wandering spirit and dances
          to the beat of their own beautiful drum. Thank you so much.
        </p>
        <p className="pt-6">Best,</p>
        <p className="">Rachel Ivy</p>
      </div>

      <Footer />
    </div>
  );
}
