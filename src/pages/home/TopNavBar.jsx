import { Link } from "react-router-dom";

const TopNavBar = () => {
  const socialMediaData = [
    { name: "Twitter", icon: "twitter.svg", link: "" },
    { name: "LinkedIn", icon: "linkedin.svg", link: "" },
    { name: "Instagram", icon: "instagram.svg", link: "" },
    { name: "Facebook", icon: "facebook.svg", link: "" },
    { name: "TikTok", icon: "tiktok.svg", link: "" },
    { name: "YouTube", icon: "youtube.svg", link: "" }
  ];
  return (
    <div className="flex justify-around  align-middle bg-primary text-white font-semibold p-5">
      <div className="flex flex-row justify-between items-center text-xs w-[20rem] lg:w-[25rem] ">
        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/phone.svg"
            alt="phone-icon"
            className="w-[0.65rem] md:w-[1rem]"
          />
          <p>+2519 999 999 999</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="src/assets/images/icons/mail.svg"
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
            src={`src/assets/images/social medias/${socialMedia.icon}`}
            alt={`${socialMedia.name} icon`}
          />
        </Link>
      ))}
      </div>
    </div>
  );
};

export default TopNavBar;
