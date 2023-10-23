"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import imgC1 from "../../img/r1.png";
import imgC2 from "../../img/r2.png";
import imgC3 from "../../img/r3.png";
import imgC4 from "../../img/r4.png";
import imgC5 from "../../img/r5.png";
import "./retreat.css";
import Image from "next/image";

const Retreat = () => {
  const slides = [
    {
      image: imgC1,
      //   text: "Specialized in Contract Workforce Management (CWFM) Products",
    },
    {
      image: imgC2,
      //   text: "Virtual Workmen Onboarding and Labor Compliance for best ROI",
    },
    {
      image: imgC3,
      //   text: "Transformation of HCM through ",
      //   text2: "Verify Onboard (VYN) and CWFM",
    },
    {
      image: imgC4,
      //   text: "HCM powered by Automation for Higher Employee Engagement and Productivity",
    },
    {
      image: imgC5,
      //   text: "HCM powered by Automation for Higher Employee Engagement and Productivity",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
  
      <div className="retreat-container" id="upComingEvents">
          <div className="overlay-retreat"></div>
        <h1 className="retreatHeading underline">Upcoming Events</h1>
        <div className="carousal-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            smooth
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            onSlideChange={(swiper) => {
              setActiveSlideIndex(swiper.realIndex);
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="imgContainer">
                  <Image
                    className="imgCss"
                    src={slide.image}
                    alt={`Slide ${index}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="stackContent">
          <div className="stackText">{slides[activeSlideIndex].text}</div>
          <div className="stackText2">{slides[activeSlideIndex].text2}</div>
        </div> */}
        </div>
      </div>
  );
};

export default Retreat;
