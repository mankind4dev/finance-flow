"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Swipers() {
  return (
    <>
    {/* <div className="">
      <h1>kljdfokmfeizl</h1>
    </div> */}
      <div className="flex flex-col w-full h-[500px] bg-white px-10">
      <h1 className="text-2xl text-[48px] text-center text-[rgba(0,0,0,1)] my-10 ">WHAT OUR USERS SAY</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
        >
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide2.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              I used to spend hours creating financial reports manually. Now, I
              just download the PDF and get everything I need in one place. The
              platform is straightforward and user-friendly.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide1.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              This tool has made my financial tracking so much easier. I love
              how simple it is to add my expenses and income. The alerts have
              helped me avoid overspending.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3 bg-[rgba(66,133,244,0.5)]">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide3.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide2.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              I used to spend hours creating financial reports manually. Now, I
              just download the PDF and get everything I need in one place. The
              platform is straightforward and user-friendly.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide3.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative flex flex-col justify-center items-center text-center p-3">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/slide3.png"
                width={200}
                height={200}
                objectFit="contain"
                alt="slide"
                className="rounded-full"
              />
            </div>
            <p className="text-[rgba(0,0,0,1)] p-8 text-start">
              I’ve tried other tools, but they were too complicated or
              expensive. This platform gives me exactly what I need clear
              financial insights without the headache.
            </p>
          </SwiperSlide> 
        </Swiper>
      </div>
    </>
  );
}
