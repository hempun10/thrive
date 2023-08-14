"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { heroData } from "../../constant/constant";

export default function Slider() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    s: SwiperType,
    time: number,
    progress: number
  ) => {
    progressCircle.current?.style.setProperty(
      "--progress",
      String(1 - progress)
    );
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroData.map((slide) => (
          <SwiperSlide className=" relative">
            <Image
              src={`${slide.src}`}
              alt=" img"
              fill
              className=" object-contain -z-20"
            />
            <div className="backdrop " />
            <div className="text_content">
              <h1 className=" hero_heading ">
                {slide.heading} <br />
                <span className=" text-primary">{slide.spanText} </span>
              </h1>
              <p className=" font-sans text-xl text-white">{slide.para}</p>
              <Button variant={"default"} className="hero-btn ">
                {slide.btnText}
                <AiOutlineArrowRight size={15} />
              </Button>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress font-sans" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
