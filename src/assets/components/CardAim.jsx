import { useState } from "react";
import { motion } from "framer-motion";
const CardAim = ({ img1, img2, heading, description }) => {
  const [isHovered, setHovered] = useState(false);
  const CardVariant = {
    container: {
      initial: { x: "-100vw", opacity: 0, scaleX: 0, scaleY: 0 },
      animate: { x: 0, opacity: 1, scaleX: 1, scaleY: 1 },
      whileHover: { scale:1.1 },
    },
    title: {
      initial: { scaleX: 0, scaleY: 0, opacity: 0 },
      animate: { scaleX: 1, scaleY: 1, opacity: 1 },
      transition: { delay: 2 },
    },
  };

  return (
    <motion.div
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
     hover:text-white
    cursor-pointer
    transition-all
    h-full
     "
      variants={CardVariant.container}
      initial="initial"
      animate="animate"
      whileHover="whileHover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        variants={CardVariant.title}
        initial="initial"
        animate="animate"
        transition="transition"
        src={isHovered ? img1 : img2}
        alt="image"
        className="w-20 max-md:w-12"
      />
      <motion.h1
        variants={CardVariant.title}
        initial="initial"
        animate="animate"
        transition="transition"
        className="text-xl font-bold font-Manrope max-md:text-center max-md:text-lg"
      >
        {heading}
      </motion.h1>
      <motion.p
        variants={CardVariant.title}
        initial="initial"
        animate="animate"
        transition="transition"
        className="font-semibold max-md:text-center max-md:text-sm"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
export default CardAim;
