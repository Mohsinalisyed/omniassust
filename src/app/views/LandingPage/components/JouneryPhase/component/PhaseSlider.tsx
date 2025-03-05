"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "./style.css";
import SlideCard from "./SlideCard";
import PhaseIcon from "@/app/svg/PhseIcon";
import { PhaseData } from "../PhaseData";
import DragBox from "@/app/hooks/DragBox";

const PhaseSlider = () => {
  const [progressBarIndex, setProgressBarIndex] = useState(0);
  const phaseSliderRef = useRef<Slider | null>(null); // Reference for phase slider
  const cardSliderRef = useRef<Slider | null>(null); // Reference for slide card slider


  // Set up Slick settings
const settings = {
  infinite: false,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 3.2, // Default value for larger screens
  slidesToScroll: 1,
  beforeChange: (current: number, next: number) => {
    setProgressBarIndex(next);
    if (cardSliderRef.current) {
      cardSliderRef.current.slickGoTo(next); // Navigate to the corresponding slide in the card slider
    }
  },
  responsive: [
    {
      breakpoint: 600, // When screen width is less than 600px
      settings: {
        slidesToShow: 1.07, // Show 1.5 slides on small screens
        slidesToScroll: 1,
        centerMode: true, // Center the slides to make part of the next slide visible
        centerPadding: "8%",
      },
    },
    {
      breakpoint: 768, // When screen width is less than 768px
      settings: {
        slidesToShow: 2, // Show 2 slides on medium screens
        slidesToScroll: 1,
      },
    },
  ],
};



const phasesettings = {
  infinite: false,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 3, // Default value for larger screens
  slidesToScroll: 1,
  beforeChange: (current: number, next: number) => {
    setProgressBarIndex(next);
    if (cardSliderRef.current) {
      cardSliderRef.current.slickGoTo(next); // Navigate to the corresponding slide in the card slider
    }
  },
  responsive: [
    {
      breakpoint: 600, // When screen width is less than 600px
      settings: {
        slidesToShow: 1.07, // Show 1.5 slides on small screens
        slidesToScroll: 1,
        centerMode: true, // Center the slides to make part of the next slide visible
        centerPadding: "8%",
      },
    },
    {
      breakpoint: 768, // When screen width is less than 768px
      settings: {
        slidesToShow: 2, // Show 2 slides on medium screens
        slidesToScroll: 1,
      },
    },
  ],
};

  // Define the color for each slide
  const getColorForSlide = (index: number) => {
    switch (index) {
      case 0:
        return "25%";
      case 1:
        return "30%";
      case 2:
        return "25%";
      case 3:
        return "25%";
      case 4:
        return "30%";
      default:
        return "0";
    }
  };

  return (
    <div className="sliderContainer">
      <div className="md:block hidden">
        <DragBox />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="relative">
          <div className="left-slider-effect absolute"></div>
          <div className="right-slider-effect absolute"></div>
        </div>
        <div className="progressBarContainer">
          {/* Phase slider */}
          <div style={{ pointerEvents: "none" }}>
            <Slider ref={cardSliderRef} {...phasesettings}>
              {[1, 2, 3, 4, 5].map((phase) => (
                <div key={phase}>
                  <div className="flex items-center">
                    <PhaseIcon /> Phase {phase}
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <span className="progressBar">
            <div
              className="inProgress"
              style={{
                width: getColorForSlide(progressBarIndex),
                background:
                  "linear-gradient(93.21deg, #FB491E 0%, #FBCA1E 100%)",
              }}
            ></div>
          </span>
        </div>

        {/* Slide card slider */}

        <Slider ref={phaseSliderRef} {...settings} className="relative">
          {PhaseData.map((phase, index) => (
            <div key={index} className="slick-slide">
              <SlideCard
                img={phase.img}
                description={phase.description}
                heading={phase.heading}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PhaseSlider;
