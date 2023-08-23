import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "./../../assets/images/Logo.png";
import arrow from "./../../assets/images/icons/Vector (6).svg";
import twitter from "./../../assets/images/social medias/twitter.svg";
import instagram from "./../../assets/images/social medias/instagram.svg";
import facebook from "./../../assets/images/social medias/facebook.svg";
import linkedin from "./../../assets/images/social medias/linkedin.svg";
import tiktok from "./../../assets/images/social medias/tiktok.svg";
import youtube from "./../../assets/images/social medias/youtube.svg";
import twitter2 from "./../../assets/images/social medias/twitter (1).svg";
import instagram2 from "./../../assets/images/social medias/instagram (1).svg";
import facebook2 from "./../../assets/images/social medias/social medias.svg";
import linkedin2 from "./../../assets/images/social medias/linkedin (1).svg";
import tiktok2 from "./../../assets/images/social medias/tiktok (1).svg";
import youtube2 from "./../../assets/images/social medias/youtube (1).svg";
import { motion, stagger } from "framer-motion";
import { useState } from "react";

const Footer = ({ variant }) => {
  const { t } = useTranslation();

  const secondary = [
    "bg-primary  hover:font-bold font-semibold",
    "bg-[#fff]",
    "text-white",
  ];
  const linkPack1 = [
    { text: "home" },
    { text: "about" },
    { text: "services" },
    { text: "events" },
    { text: "teams" },
    { text: "contact" },
  ];
  const linkPack2 = [
    { link: "", text: t("footer-s-eei") },
    { link: "", text: t("footer-s-nafsp") },
    { link: "", text: t("footer-s-cwi") },
    { link: "", text: t("footer-s-maes") },
  ];
  const socialMediaLinks = [
    { icon: twitter, alt: "twitter-icon", size: "w-[1rem] sm:w-6", link: "" },
    {
      icon: instagram,
      alt: "instagram-icon",
      size: "w-[1rem] sm:w-6",
      link: "",
    },
    { icon: facebook, alt: "facebook-icon", size: "w-[1rem] sm:w-6", link: "" },
    { icon: linkedin, alt: "linkedin-icon", size: "w-[1rem] sm:w-6", link: "" },
    { icon: tiktok, alt: "ticktok-icon", size: "w-[1rem] sm:w-6", link: "" },
    { icon: youtube, alt: "youtube-icon", size: "w-[1.5rem] sm:w-8", link: "" },
  ];
  const lightSocial = [
    { icon: twitter2, alt: "twitter-icon", size: "w-[1rem] sm:w-6", link: "" },
    {
      icon: instagram2,
      alt: "instagram-icon",
      size: "w-[1rem] sm:w-6",
      link: "",
    },
    {
      icon: facebook2,
      alt: "facebook-icon",
      size: "w-[1rem] sm:w-6",
      link: "",
    },
    {
      icon: linkedin2,
      alt: "linkedin-icon",
      size: "w-[1rem] sm:w-6",
      link: "",
    },
    { icon: tiktok2, alt: "ticktok-icon", size: "w-[1rem] sm:w-6", link: "" },
    {
      icon: youtube2,
      alt: "youtube-icon",
      size: "w-[1.5rem] sm:w-8",
      link: "",
    },
  ];
  const socials = {
    initial: { y: -50 },
    animate: {
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 300 },
    },

    whileHover: { scale: 1.2 },
  };
  const linkers = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
        duration: 0.2,
      },
    },
    whileHover: { scale: 1.1 },
  };
  const ReturnDesign = (value) => {
    if (value === "blue") {
      return "bg-primary text-white"; // Apply blue variation styles
    } else if (value === "white") {
      return "bg-transparent text-primary"; // Apply white variation styles
    } else {
      return ""; // Default variation styles
    }
  };
  const imageholder = "bg-[#fff]";
  return (
    <footer>
      <div
        className={`flex flex-col px-5 pb-5 md:flex-row md:gap-10 flex-wrap md:justify-evenly lg:px-20 md:flex-nowrap ${ReturnDesign(
          variant
        )}`}
      >
        <div className="">
          <motion.img
            variants={socials}
            whileHover="whileHover"
            initial="initial"
            animate="animate"
            className={`w-[10rem] my-2 ${
              variant === "blue" ? imageholder : ""
            }`}
            src={logo}
            alt="chains-logo"
          />
          <motion.address
            variants={linkers}
            initial="initial"
            animate="animate"
            className="text-sm md:text-md"
          >
            <motion.p variants={linkers}>123 Main Street</motion.p>
            <motion.p variants={linkers}>City, State ZIP</motion.p>
            <motion.p variants={linkers}>Country</motion.p>
            <motion.p variants={linkers} className="font-semibold">
              Email:{" "}
              <a href="mailto:info@example.com" className="font-normal">
                info@example.com
              </a>
            </motion.p>
            <motion.p variants={linkers} className="font-semibold">
              Phone:{" "}
              <a href="tel:+1234567890" className="font-normal">
                123-456-7890
              </a>
            </motion.p>
          </motion.address>
        </div>
        <motion.div
          variants={linkers}
          initial="initial"
          animate="animate"
          className="mt-5 leading-7 "
        >
          {/** apply header to this area */}
          <motion.h1
            variants={linkers}
            className={`font-bold mb-2 text-sm ${
              variant === "blue" ? "text-white" : "text-footer "
            }`}
          >
            {t("footer-usefull-links")}
          </motion.h1>
          <ul className="flex flex-col gap-2">
            {linkPack1.map((item) => (
              <motion.li variants={linkers} whileHover="whileHover">
                <Link
                  to={item.text}
                  smooth
                  spy
                  className={`hover:underline   flex text-xs ${
                    variant === "blue"
                      ? "hover:no-underline "
                      : "hover:text-secondary"
                  }`}
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src={arrow}
                    alt="arrow-icon"
                  />
                  {t(item.text)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          variants={linkers}
          initial="initial"
          animate="animate"
          className="mt-5 leading-7 "
        >
          {/** apply header to this area */}
          <motion.h1
            variants={linkers}
            className={`font-bold mb-2 text-sm ${
              variant === "blue" ? "text-white" : "text-footer "
            }`}
          >
            {t("footer-our-services")}
          </motion.h1>
          <motion.ul variants={linkers} className="flex flex-col gap-2 ">
            {linkPack2.map((item) => (
              <motion.li variants={linkers}  initial="initial"
        animate="animate" whileHover="whileHover">
                <Link
                  to={item.link}
                  className={`hover:underline   flex text-xs ${
                    variant === "blue"
                      ? "hover:no-underline "
                      : "hover:text-secondary"
                  }`}
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src={arrow}
                    alt="arrow-icon"
                  />
                  <p>{item.text}</p>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          variants={linkers}
          initial="initial"
          animate="animate"
          className="mt-5 flex flex-col gap-2 "
        >
          {/** apply header to this area */}
          <motion.h1
            variants={linkers}
            className={`font-bold mb-2 text-sm ${
              variant === "blue" ? "text-white" : "text-footer "
            }`}
          >
            {t("footer-our-social-networks")}
          </motion.h1>
          <motion.p variants={linkers} className="text-xs">
            {t("footer-our-sn-text")}
          </motion.p>
          <motion.div
            variants={linkers}
            className="flex gap-4 sm:gap-12 md:gap-5 items-center"
          >
            {(variant === "white") | ""
              ? socialMediaLinks.map((socialMedia, index) => (
                  <Link key={index} to={socialMedia.link}>
                    <motion.div
                      variants={socials}
                      initial="initial"
                      animate="animate"
                      whileHover="whileHover"
                      className="bg-primary p-2 rounded-lg hover:bg-footerSocialHover sm:p3"
                    >
                      <img
                        className={socialMedia.size}
                        src={socialMedia.icon}
                        alt={socialMedia.alt}
                      />
                    </motion.div>
                  </Link>
                ))
              : lightSocial.map((socialMedia, index) => (
                  <Link key={index} to={socialMedia.link}>
                    <motion.div
                      variants={socials}
                      initial="initial"
                      animate="animate"
                      whileHover="whileHover"
                      className="bg-[#fff] p-2 rounded-lg  sm:p3"
                    >
                      <img
                        className={socialMedia.size}
                        src={socialMedia.icon}
                        alt={socialMedia.alt}
                      />
                    </motion.div>
                  </Link>
                ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-primary bg-opacity-5 px-5 py-10 flex flex-col gap-4 md:flex-row md:justify-evenly">
        <p>
          © {t("footer-copyright")}{" "}
          <span className="font-bold">ChainsCharity. </span>
          {t("footer-arr")}
        </p>
        <p>
          {t("footer-designed-by") + " "}
          <span className="text-primary font-bold cursor-pointer">
            <Link className="hover:scale-150">Tridents Technologies</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
