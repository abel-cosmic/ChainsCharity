import React, { useState } from "react";
import SliderButton from "./SliderButton";
import right_arrow from "./../images/icons/Frame 35 (1).png";
import left_arrow from "./../images/icons/Frame 35.png";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden ">
      <div className="flex flex-row w-full relative overflow-hidden items-center justify-center">
        <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full z-50">
          <SliderButton
            path={handlePrevClick}
            img={left_arrow}
            position={"left-20 max-md:left-5"}
          />
          <SliderButton
            path={handleNextClick}
            img={right_arrow}
            position={"right-20 max-md:right-5"}
          />
        </div>
        <div
          className="flex flex-row h-full transition-transform duration-300"
          style={{
            transform: `translateX(calc(-${
              currentImageIndex * (100 / images.length)
            }%))`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
              style={{
                width: `${100 / 3}%`,
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full object-cover max-md:h-44 "
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 max-lg:w-2 max-lg:h-2 max-lg:mx-1 rounded-full ${
              index === currentImageIndex ? "bg-primary" : "bg-gray-500"
            } mx-2 cursor-pointer`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
