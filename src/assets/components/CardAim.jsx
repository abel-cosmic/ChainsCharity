import { useState } from "react";
const CardAim = ({img1, img2, heading, description}) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="hover:bg-primary  shadow-cust rounded-xl flex flex-col items-center w-96 px-10 py-20 gap-6  hover:text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={isHovered ? img1 : img2} alt="image" className="w-20"/>
      <h1 className="text-xl font-bold font-Manrope  ">{heading}</h1>
      <p className="font-semibold">{description}</p>
    </div>
  );
};
export default CardAim;
