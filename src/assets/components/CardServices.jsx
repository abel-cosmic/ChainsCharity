import earth from "./../images/icons/Group (2).svg";
import { useState } from "react";
const CardServices = ({ image, heading, description }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="border-[0.1rem] border-primary border-solid flex flex-col items-center px-28 w-[34rem] py-16 max-md:py-8 max-md:px-14 rounded gap-4 max-md:gap-2 hover:shadow-blue max-md:flex max-md:flex-col max-md:w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`border-primary border-solid  w-fit bg-primary  ${
          isHovered
            ? "border-[0.1rem] bg-opacity-10 p-[12.8px] max-lg:p-[12.8px] max-lg:border-[0.8px]"
            : "border-[0.1rem] bg-opacity-5 p-[24px] max-lg:p-[13.6px] max-lg:border-[0.8px]"
        }`}
      >
        <img src={image} alt="earth" className="w-10 max-md:w-5" />
      </div>
      <h1
        className={`font-bold text-xl max-md:text-base ${
          isHovered ? "text-primary" : "text-black"
        }`}
      >
        {heading}
      </h1>
      <p className="font-semibold text-md text-center max-md:text-sm">
        {description}
      </p>
    </div>
  );
};

export default CardServices;
