import React, { useState, useEffect, useRef } from "react";
import right_arrow from "./../images/icons/Frame 35 (1).png";
import left_arrow from "./../images/icons/Frame 35.png";
import SliderButton from "./SliderButton";
import { motion } from "framer-motion";

const SingleImageSlider = ({ sliders, Component, sliderButtons }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  let interval;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliders.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? sliders.length - 1 : prevSlide - 1
    );
  };

  const startAutoSlide = () => {
    interval = setInterval(nextSlide, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(interval);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    sliderRef.current.style.transition = "none";
    stopAutoSlide();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const offsetX = startX.current - e.clientX;
    sliderRef.current.style.transform = `translateX(-${
      currentSlide * 100 + offsetX
    }%)`;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const offset = startX.current - e.clientX;

    if (offset > 50) {
      nextSlide();
    } else if (offset < -50) {
      prevSlide();
    }

    sliderRef.current.style.transition = "transform 0.3s ease-in-out";
    sliderRef.current.style.transform = `translateX(${-currentSlide * 100}%)`;

    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentSlide]);

  const sliderRef = useRef(null);

  return (
    <div
      className="relative overflow-hidden  max-md:flex max-md:flex-col max-md:w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        ref={sliderRef}
        className="flex flex-row transition-transform duration-[0.8s] transform"
        style={{ transform: `translateX(${currentSlide * -100}%)` }}
      >
        {sliders.map((slide, index) => (
          <div key={index} className="w-full min-w-full max-md:flex">
            {index === currentSlide && <Component {...slide} />}
          </div>
        ))}
      </div>
      {sliderButtons === "yes" && (
        <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
          <SliderButton path={prevSlide} img={left_arrow} position={"left-0"} />
          <SliderButton
            path={nextSlide}
            img={right_arrow}
            position={"right-0"}
          />
        </div>
      )}
      {
        <div className="flex items-center justify-center mt-2 h-fit">
          {sliders.map((_, index) => (
            <motion.div
            whileHover={{scale:1.3,translateY:-2}}
              key={index}
              className={`h-4 w-4 max-lg:w-2 max-lg:h-2 max-lg:mx-1 rounded-full ${
                index === currentSlide ? "bg-primary" : "bg-gray-500"
              } mx-2 cursor-pointer`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      }
    </div>
  );
};

export default SingleImageSlider;
