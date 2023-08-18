import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/Logo.png";
import cancel from "./../../assets/images/icons/cancel.svg";
import hamburger from "./../../assets/images/icons/Frame 86.svg";

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
    { textKey: 'home', link: '' },
    { textKey: 'about', link: '' },
    { textKey: 'services', link: '' },
    { textKey: 'events', link: '' },
    { textKey: 'teams', link: '' },
    { textKey: 'contact', link: '' },
  ];

  return (
    <nav
      className={` ${
        linksVisible ? "bg-white" : "px-2 bg-black"
      } flex flex-col md:flex-row md:justify-between border-solid border-primary border-b px-5 md:px-2 lg:pl-20 xl:pl-20 xl:pr-20 sticky top-[-0.1rem] z-[100]`}
    >
      <div className="flex justify-between">
        <img
          className={`${
            linksVisible ? "" : "opacity-0 h-0"
          } w-[5rem] md:w-[6rem]`}
          src={logo}
          alt="chains-logo"
        />
        <img
          className={`md:hidden ${
            linksVisible ? " w-[2rem]" : "w-[1.2rem] m-4"
          }`}
          src={`${linksVisible ? hamburger : cancel}`}
          alt=""
          onClick={toggleLinks}
        />
      </div>
      <div
        className={`${
          linksVisible ? "hidden" : "flex max-md:h-screen pt-5"
        } flex-col flex-wrap  items-start pl-10 gap-5 md:pl-0 md:flex md:flex-row lg:gap-8 font-semibold md:items-center text-sm lg:text-lg bg-white`}
      >
        {navigationLinks.map((link, index) => (
        <Link
          key={index}// You can add a "link" attribute here if needed
          className="hover:underline hover:text-secondary hover:font-bold"
        >
          {t(link.textKey)}
        </Link>
      ))}
        <div className="flex items-center gap-3">
          <p>English</p>
          <div className="movetoggle flex flex-col items-center h-20">
            <p>{t("language")}</p>
            <input
              type="checkbox"
              className="toggle-button"
              checked={isAmharic}
              onChange={toggleLanguage}
            />
          </div>
          <p>አማርኛ</p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
