import earth from "./../images/icons/Group (2).svg";
import { useState } from "react";
const CardServices = ({ image, heading, description }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="border-[0.1rem] border-primary border-solid flex flex-col items-center px-32 w-[38rem] py-20 rounded gap-4 hover:shadow-blue "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`border-primary border-solid  w-fit bg-primary  ${
          isHovered
            ? "border-[0.15rem] p-[1.45rem] bg-opacity-10"
            : "border-[0.1rem] bg-opacity-5 p-6"
        }`}
      >
        <img src={image} alt="earth" className="w-10" />
      </div>
      <h1
        className={`font-bold text-xl ${
          isHovered ? "text-primary" : "text-black"
        }`}
      >
        {heading}
      </h1>
      <p className="font-semibold text-md text-center">{description}</p>
    </div>
  );
};

export default CardServices;
