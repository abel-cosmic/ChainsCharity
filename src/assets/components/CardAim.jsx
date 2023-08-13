import { useState } from "react";
const CardAim = ({ img1, img2, heading, description }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="
      hover:bg-primary
      shadow-cust 
      rounded-xl max-md:rounded-lg 
      flex 
      flex-col 
      items-center
       w-96 max-md:w-full 
       px-10 max-md:mx-6
       py-20 
       gap-6 max-md:gap-4
     hover:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={isHovered ? img1 : img2} alt="image" className="w-20 max-md:w-12" />
      <h1 className="text-xl font-bold font-Manrope max-md:text-center max-md:text-lg">{heading}</h1>
      <p className="font-semibold max-md:text-center max-md:text-sm">{description}</p>
    </div>
  );
};
export default CardAim;
