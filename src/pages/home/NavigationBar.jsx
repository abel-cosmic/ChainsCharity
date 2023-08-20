import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/Logo.png";
import cancel from "./../../assets/images/icons/cancel.svg";
import hamburger from "./../../assets/images/icons/Frame 86.svg";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const { t } = useTranslation(); //this is how we access our text
  // made for handling the language change
  const { i18n } = useTranslation();
  const [isAmharic, setIsAmharic] = useState(false);
  const toggleLanguage = () => {
    const newLanguage = isAmharic ? "en" : "am";
    i18n.changeLanguage(newLanguage);
    setIsAmharic(!isAmharic);
  };

  const [linksVisible, setLinksVisible] = useState(true);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  };

  const navigationLinks = [
    { textKey: "home", link: "" },
    { textKey: "about", link: "" },
    { textKey: "services", link: "" },
    { textKey: "events", link: "" },
    { textKey: "contact", link: "" },
  ];
  const container = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 200,
        staggerChildren: 0.4,
        duration: 0.2,
      },
    },
  };
  const images = {
    initial: { opacity: 0 },
    whileHover: { scale: 1.1 },
    animate: {
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 10, delay: 1 },
    },
  };
  const links = {
    initial: { y: -80, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, delay: 1 },
    },
    whileHover: { scale: 1.06 },
  };
  const toogleContainer = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 1, type: "tween" } },
  };
  return (
    <nav
      className={` ${
        linksVisible ? "bg-white" : "px-2 bg-black"
      } flex flex-col md:flex-row md:justify-between border-solid border-primary border-b px-5 md:px-2 lg:pl-20 xl:pl-20 xl:pr-20 sticky top-[-0.1rem] z-[100]`}
    >
      <motion.div
        className="flex justify-between"
        variants={container}
        initial="initial"
        animate="animate"
      >
        <motion.img
          variants={images}
          whileHover="whileHover"
          className={`${
            linksVisible ? "" : "opacity-0 h-0"
          } w-[5rem] md:w-[6rem]`}
          src={logo}
          alt="chains-logo"
        />
        <motion.img
          variants={images}
          whileHover="whileHover"
          className={`md:hidden ${
            linksVisible ? " w-[2rem]" : "w-[1.2rem] m-4"
          }`}
          src={`${linksVisible ? hamburger : cancel}`}
          alt=""
          onClick={toggleLinks}
        />
      </motion.div>
      <motion.div
        variants={links}
        animate="animate"
        initial="initial"
        className={`${
          linksVisible ? "hidden" : "flex max-md:h-screen pt-5"
        } flex-col flex-wrap  items-start pl-10 gap-5 md:pl-0 md:flex md:flex-row lg:gap-8 font-semibold md:items-center text-sm lg:text-lg bg-white`}
      >
        {navigationLinks.map((link, index) => (
          <motion.div
            variants={links}
            className="hover-div relative inline-block  pb-1 cursor-pointer"
            whileHover="whileHover"
          >
            <Link
              key={index}
              className="relative hover:text-secondary hover:font-"
            >
              {t(link.textKey)}
            </Link>
            <motion.div
              className="line absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-width duration-300 ease max-md:hidden"
              transition={{ type: "spring" }}
            ></motion.div>
          </motion.div>
        ))}
        <motion.div
          className="flex items-center gap-3"
          initial="initial"
          animate="animate"
          variants={toogleContainer}
        >
          <p>English</p>
          <div className="movetoggle flex flex-col imtems-center  h-20">
            <p className="self-center">{t("language")}</p>
            <motion.input
              layout
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 30,
              }}
              type="checkbox"
              className="toggle-button self-center"
              checked={isAmharic}
              onChange={toggleLanguage}
            />
          </div>
          <p>አማርኛ</p>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default NavigationBar;
