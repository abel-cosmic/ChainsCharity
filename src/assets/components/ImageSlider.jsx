import { useState, useEffect } from "react";
import CardTestimonial from "./CardTestimonial";

const ImageSlider = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex flex-row transition-transform duration-500 transform"
        style={{ transform: `translateX(${currentSlide * -100}%)` }}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {sliders.map((slide, index) => (
          <div key={index} className="w-full min-w-full">
            {index === currentSlide && (
              <CardTestimonial
                image={slide.image}
                name={slide.name}
                title={slide.title}
                description={slide.description}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        {sliders.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-gray-500"
            } mx-1 cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <button className="mr-2" onClick={prevSlide}>
          Previous
        </button>
        <button className="ml-2" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
