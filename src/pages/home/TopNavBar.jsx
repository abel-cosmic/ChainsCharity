import { Link } from "react-router-dom";
import twitter from "./../../assets/images/social medias/twitter.svg";
import instagram from "./../../assets/images/social medias/instagram.svg";
import facebook from "./../../assets/images/social medias/facebook.svg";
import linkedin from "./../../assets/images/social medias/linkedin.svg";
import tiktok from "./../../assets/images/social medias/tiktok.svg";
import youtube from "./../../assets/images/social medias/youtube.svg";
import phone from "./../../assets/images/icons/phone.svg";
import email from "./../../assets/images/icons/mail.svg";
import { motion } from "framer-motion";

const TopNavBar = () => {
  const socialMediaData = [
    { name: "Twitter", icon: twitter, link: "" },
    { name: "LinkedIn", icon: linkedin, link: "" },
    { name: "Instagram", icon: instagram, link: "" },
    { name: "Facebook", icon: facebook, link: "" },
    { name: "TikTok", icon: tiktok, link: "" },
    { name: "YouTube", icon: youtube, link: "" },
  ];
  const TopNavBarVariants = {
    infos: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { delay: 0.2, type: "spring", duration: 2.4, stiffness: 200 },
      whileHover: { scale: 1.05 },
    },
    socials: {
      initial: { y: -50 },
      animate: { y: 0 },
      transition: { duration: 1, type: "spring", stiffness: 300 },
      whileHover: { scale: 1.2 },
    },
  };

  return (
    <div className="flex justify-around  align-middle bg-primary text-white font-semibold p-5">
      <div className="flex flex-row justify-between items-center text-xs w-[20rem] lg:w-[25rem] ">
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          variants={TopNavBarVariants.infos}
          initial="initial"
          animate="animate"
          transition="transition"
          whileHover="whileHover"
        >
          <img
            src={phone}
            alt="phone-icon"
            className="w-[0.65rem] md:w-[1rem]"
          />
          <p>+2519 999 999 999</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          variants={TopNavBarVariants.infos}
          initial="initial"
          animate="animate"
          transition="transition"
          whileHover="whileHover"
        >
          <img
            src={email}
            alt="phone-icon"
            className="w-[1.2rem] md:w-[1.5rem]"
          />
          <p>contact@gmail.com</p>
        </motion.div>
      </div>
      <div className="gap-10 hidden md:flex">
        {socialMediaData.map((socialMedia, index) => (
          <Link key={index}>
            <motion.img
              variants={TopNavBarVariants.socials}
              initial="initial"
              animate="animate"
              transition="transition"
              whileHover="whileHover"
              className={
                socialMedia.name === "YouTube" ? "w-[2rem]" : "w-[1.5rem]"
              }
              src={socialMedia.icon}
              alt={`${socialMedia.name} icon`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNavBar;
