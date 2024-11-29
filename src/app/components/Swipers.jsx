"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Swipers() {
  return (
    <>
      <div className="flex w-full h-[500px] bg-slate-800">
        <Swiper

          slidesPerView={3}
          spaceBetween={30}
          
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="relative flex   justify-center items-center  p-3  w-[200px] h-[200px] ">
            <div className="flex justify-center text-center mt-16">
              <Image
                src="/images/tracking.png"
                width={200}
                height={200}
                objectFit="conatain"
                alt="slide"
                className="flex rounded-[50%] justify-center   "
              />
            </div>
            <p className="m-12">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex   justify-center items-center  p-3  w-[200px] h-[200px] ">
            <div className="flex justify-center text-center mt-16">
              <Image
                src="/images/tracking.png"
                width={200}
                height={200}
                objectFit="conatain"
                alt="slide"
                className="flex rounded-[50%] justify-center   "
              />
            </div>
            <p className="m-12">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex   justify-center items-center  p-3  w-[200px] h-[200px] ">
            <div className="flex justify-center text-center mt-16">
              <Image
                src="/images/tracking.png"
                width={200}
                height={200}
                objectFit="conatain"
                alt="slide"
                className="flex rounded-[50%] justify-center   "
              />
            </div>
            <p className="m-12">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex   justify-center items-center  p-3  w-[200px] h-[200px] ">
            <div className="flex justify-center text-center mt-16">
              <Image
                src="/images/tracking.png"
                width={200}
                height={200}
                objectFit="conatain"
                alt="slide"
                className="flex rounded-[50%] justify-center   "
              />
            </div>
            <p className="m-12">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex   justify-center items-center  p-3  w-[200px] h-[200px] ">
            <div className="flex justify-center text-center mt-16">
              <Image
                src="/images/tracking.png"
                width={200}
                height={200}
                objectFit="conatain"
                alt="slide"
                className="flex rounded-[50%] justify-center   "
              />
            </div>
            <p className="m-12">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide> 
        </Swiper>
      </div>
    </>
  );
}
