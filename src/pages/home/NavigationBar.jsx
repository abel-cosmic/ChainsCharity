import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [linksVisible, setLinksVisible] = useState(true);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  };

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
          } w-[5rem] md:w-[7rem]`}
          src="src/assets/images/Logo.png"
          alt="chains-logo"
        />
        <img
          className={`md:hidden ${
            linksVisible ? " w-[2rem]" : "w-[1.2rem] m-4"
          }`}
          src={`${
            linksVisible
              ? "src/assets/images/icons/Frame 86.svg"
              : "src/assets/images/icons/cancel.svg"
          }`}
          alt=""
          onClick={toggleLinks}
        />
      </div>
      <div
        className={`${
          linksVisible ? "hidden" : "flex max-md:h-screen pt-5"
        } flex-col flex-wrap  items-start pl-10 gap-5 md:pl-0 md:flex md:flex-row lg:gap-8 font-semibold md:items-center text-sm lg:text-lg bg-white`}
      >
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          Home
        </Link>
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          About
        </Link>
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          Services
        </Link>
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          Events
        </Link>
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          Teams
        </Link>
        <Link className="hover:underline hover:text-secondary hover:font-bold">
          Contact
        </Link>
        <div className="flex items-center gap-3">
          <p>English</p>
          <div className="movetoggle flex flex-col items-center h-20">
            <p>language</p>
            <input type="checkbox" className="toggle-button" />
          </div>
          <p>አማርኛ</p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
