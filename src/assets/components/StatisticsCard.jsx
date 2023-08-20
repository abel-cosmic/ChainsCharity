import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatisticsCard = ({ stat }) => {
    const [number, setNumber] = useState(0);
    const countUpSeconds = stat.number > 300 ? 500 : 5000;
    const incrementRate = countUpSeconds / stat.number;
    // {console.log(incrementRate, countUpSeconds, stat.number)}   
    useEffect(() => {
      const interval = setInterval(() => {
        setNumber(prevNumber => (prevNumber < stat.number ? prevNumber + 1 : prevNumber ));
      }, incrementRate); 
  
      return () => {
        clearInterval(interval); // Clear the interval when the component unmounts
      };
    }, []); // Empty dependency array ensures this effect runs only once
  
  return (
    <motion.div 
    initial={{scaleX:0,scaleY:0,opacity:0}}
    animate={{scaleX:1,scaleY:1,opacity:1}}
    transition={{delay:1}}
    className="text-black bg-primary bg-opacity-10 mt-10 pb-5 flex flex-col w-full md:w-80 lg:w-1/4 items-center gap-3" key={stat.id}>
      <img src={stat.image} alt={stat.alt} className="w-20 mt-[-2rem] " />
      <motion.p 
      initial={{speed:0.8}}
      animate={{speed:1}}
      className="font-semibold text-2xl">{number}</motion.p>
      <p className=" text-2xl">{stat.title}</p>
    </motion.div>
  );
};

export default StatisticsCard;
