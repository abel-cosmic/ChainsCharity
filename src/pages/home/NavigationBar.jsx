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
  const NavBarVariants = {
    container: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { delay: 0.2, type: "spring", duration: 2.4, stiffness: 200 },
    },
    images: {
      initial: { opacity: 0 },
      whileHover: { scale: 1.1 },
      animate: { opacity: 1 },
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    links: {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { type: "spring", stiffness: 300 },
      whileHover: { scale: 1.06 },
    },
    toogleContainer: {
      initial: { y: "-100vh", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { delay: 0.2, type: "tween" },
    },
  };
  return (
    <nav
      className={` ${
        linksVisible ? "bg-white" : "px-2 bg-black"
      } flex flex-col md:flex-row md:justify-between border-solid border-primary border-b px-5 md:px-2 lg:pl-20 xl:pl-20 xl:pr-20 sticky top-[-0.1rem] z-[100]`}
    >
      <motion.div
        className="flex justify-between"
        variants={NavBarVariants.container}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        <motion.img
          variants={NavBarVariants.images}
          whileHover="whileHover"
          initial="initial"
          animate="animate"
          transition="transition"
          className={`${
            linksVisible ? "" : "opacity-0 h-0"
          } w-[5rem] md:w-[6rem]`}
          src={logo}
          alt="chains-logo"
        />
        <motion.img
          variants={NavBarVariants.images}
          whileHover="whileHover"
          initial="initial"
          animate="animate"
          transition="transition"
          className={`md:hidden ${
            linksVisible ? " w-[2rem]" : "w-[1.2rem] m-4"
          }`}
          src={`${linksVisible ? hamburger : cancel}`}
          alt=""
          onClick={toggleLinks}
        />
      </motion.div>
      <div
        className={`${
          linksVisible ? "hidden" : "flex max-md:h-screen pt-5"
        } flex-col flex-wrap  items-start pl-10 gap-5 md:pl-0 md:flex md:flex-row lg:gap-8 font-semibold md:items-center text-sm lg:text-lg bg-white`}
      >
        {navigationLinks.map((link, index) => (
          <motion.div
            variants={NavBarVariants.links}
            className="hover-div relative inline-block  pb-1 cursor-pointer"
            whileHover="whileHover"
            initial="initial"
            animate="animate"
            transition="transition"
          >
            <Link
              key={index}
              className="relative hover:text-secondary hover:font-"
            >
              {t(link.textKey)}
            </Link>
            <motion.div
              className="line absolute bottom-0 left-0 w-0 h-1 bg-secondary transition-width duration-300 ease"
              transition={{ type: "spring" }}
            ></motion.div>
          </motion.div>
        ))}
        <motion.div
          className="flex items-center gap-3"
          variants={NavBarVariants.toogleContainer}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          <p>English</p>
          <div className="movetoggle flex flex-col imtems-center h-20">
            <p>{t("language")}</p>
            <motion.input
              layout
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 30,
              }}
              type="checkbox"
              className="toggle-button"
              checked={isAmharic}
              onChange={toggleLanguage}
            />
          </div>
          <p>አማርኛ</p>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavigationBar;
