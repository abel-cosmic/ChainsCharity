import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [linksVisible, setLinksVisible] = useState(true);

  const toggleLinks = () => {
    setLinksVisible(!linksVisible);
  };

  return (
    <nav className="flex flex-col md:flex-row md:justify-between border-solid border-primary border-b px-5 md:px-2 lg:pl-20 xl:pl-20 xl:pr-20 sticky top-[-0.1rem] bg-white z-[100]">
      <div className="flex justify-between">
        <img
          className="w-[7rem]"
          src="src/assets/images/Logo.png"
          alt="chains-logo"
        />
        <img
          className="md:hidden w-[2rem]"
          src="src/assets/images/icons/Frame 86.svg"
          alt=""
          onClick={toggleLinks}
        />
      </div>
      <div
        className={`${
          linksVisible ? "hidden" : "flex"
        } flex-col items-start pl-5 gap-5 md:pl-0 md:flex md:flex-row lg:gap-8 font-semibold md:items-center text-sm lg:text-lg`}
      >
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Events</Link>
        <Link>Teams</Link>
        <Link>Contact</Link>
        <div className="flex items-center gap-3 ">
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
