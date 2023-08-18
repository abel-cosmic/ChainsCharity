import { Link } from "react-router-dom";
import twitter from "./../../assets/images/social medias/twitter.svg";
import instagram from "./../../assets/images/social medias/instagram.svg";
import facebook from "./../../assets/images/social medias/facebook.svg";
import linkedin from "./../../assets/images/social medias/linkedin.svg";
import tiktok from "./../../assets/images/social medias/tiktok.svg";
import youtube from "./../../assets/images/social medias/youtube.svg";
import phone from "./../../assets/images/icons/phone.svg";
import email from "./../../assets/images/icons/mail.svg"; 

const TopNavBar = () => {
  const socialMediaData = [
    { name: "Twitter", icon: twitter , link: "" },
    { name: "LinkedIn", icon: linkedin, link: "" },
    { name: "Instagram", icon: instagram, link: "" },
    { name: "Facebook", icon: facebook, link: "" },
    { name: "TikTok", icon: tiktok, link: "" },
    { name: "YouTube", icon: youtube, link: "" }
  ];
  return (
    <div className="flex justify-around  align-middle bg-primary text-white font-semibold p-5">
      <div className="flex flex-row justify-between items-center text-xs w-[20rem] lg:w-[25rem] ">
        <div className="flex items-center gap-3">
          <img
            src={phone}
            alt="phone-icon"
            className="w-[0.65rem] md:w-[1rem]"
          />
          <p>+2519 999 999 999</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src={email}
            alt="phone-icon"
            className="w-[1.2rem] md:w-[1.5rem]"
          />
          <p>contact@gmail.com</p>
        </div>
      </div>
      <div className="gap-10 hidden md:flex">
      {socialMediaData.map((socialMedia, index) => (
        <Link key={index}>
          <img
            className={socialMedia.name === "YouTube" ? "w-[2rem]" : "w-[1.5rem]"}
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
