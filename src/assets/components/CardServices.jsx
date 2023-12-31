import { useState } from "react";
import { motion } from "framer-motion";
const CardServices = ({ image, heading, description }) => {
  const [isHovered, setHovered] = useState(false);
  const title = {
    initial: { scaleX: 0, scaleY: 0, opacity: 0 },
    animate: { scaleX: 1, scaleY: 1, opacity: 1 },
    whileHover: { scale: 1.05 },
  };
  return (
    <motion.div
      variants={title}
      animate="animate"
      transition="transition"
      initial="initial"
      whileHover="whileHover"
      className="transition-all border-[0.1rem] border-primary border-solid flex flex-col items-center px-28 w-[42rem] h-[20rem] py-16 max-md:py-8 max-md:px-14 rounded gap-4 max-md:gap-2 hover:shadow-blue max-md:flex max-md:flex-col max-md:w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`border-primary border-solid  w-fit bg-primary object-cover ${
          isHovered
            ? "border-[0.15rem] p-[1.45rem] bg-opacity-10 max-md:border-[0.15rem] max-md:p-[0.85rem]"
            : "border-[0.1rem] bg-opacity-5 p-6 max-md:p-4"
        }`}
      >
        <img src={image} alt="earth" className="w-10 max-md:w-5 " />
      </div>
      <h1
        className={`font-bold text-xl max-md:text-base text-center ${
          isHovered ? "text-primary" : "text-black"
        }`}
      >
        {heading}
      </h1>
      <p className="font-semibold text-md text-center max-md:text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default CardServices;
