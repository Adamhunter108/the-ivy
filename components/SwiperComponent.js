import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper"
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from 'next/image'

export default function SwiperComponent() {
  return (
    <div>

      <div className="px-5 lg:px-72 flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"flip"}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          pagination={{
              clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          
          // className="mySwiper"
        >
        
          <SwiperSlide>
            <Image
              // className="object-fill"
              src="/images/swiper/1.jpg"
              width={1000}
              height={600}
              alt="swiper pic 1"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              // className="object-fill"
              src="/images/swiper/2.jpg"
              width={1000}
              height={600}
              alt="swiper pic 2"
            />
          </SwiperSlide>

          <SwiperSlide>
            
            <Image
              // className="object-fill"
              src="/images/swiper/3.jpg"
              width={600}
              height={600}
              alt="swiper pic 3"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              // className="object-fill"
              src="/images/swiper/4.jpg"
              width={600}
              height={600}
              alt="swiper pic 4"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              // className="object-fill"
              src="/images/swiper/5.jpg"
              width={600}
              height={600}
              alt="swiper pic 5"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}
