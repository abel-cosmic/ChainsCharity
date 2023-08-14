import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between mx-10">
      <img
        className="w-[10rem]"
        src="src/assets/images/Logo.png"
        alt="chains-logo"
      />
      <div className="flex gap-10 font-semibold items-center">
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
