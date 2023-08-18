import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./../../assets/images/Logo.png";
import arrow from "./../../assets/images/icons/Vector (copy).svg";
import twitter from "./../../assets/images/social medias/twitter.svg";
import instagram from "./../../assets/images/social medias/instagram.svg";
import facebook from "./../../assets/images/social medias/facebook.svg";
import linkedin from "./../../assets/images/social medias/linkedin.svg";
import tiktok from "./../../assets/images/social medias/tiktok.svg";
import youtube from "./../../assets/images/social medias/youtube.svg";

const Footer = () => {
  const { t } = useTranslation();

  const secondary = [
    "bg-primary  hover:font-bold font-semibold",
    "bg-[#fff]",
    "text-white",
  ];
  const linkPack1 = [
    { link: "", text: t("home") },
    { link: "", text: t("about") },
    { link: "", text: t("services") },
    { link: "", text: t("events") },
    { link: "", text: t("teams") },
    { link: "", text: t("contact") },
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
  return (
    <footer>
      <div className="flex flex-col px-5 pb-5 md:flex-row md:gap-10 flex-wrap md:justify-evenly lg:px-20 md:flex-nowrap">
        <div className="">
          <img className="w-[10rem]" src={logo} alt="chains-logo" />
          <address className="text-xs md:text-md">
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Country</p>
            <p className="font-semibold">
              Email:{" "}
              <a href="mailto:info@example.com" className="font-normal">
                info@example.com
              </a>
            </p>
            <p className="font-semibold">
              Phone:{" "}
              <a href="tel:+1234567890" className="font-normal">
                123-456-7890
              </a>
            </p>
          </address>
        </div>
        <div className="mt-5 leading-7 ">
          <h1 className="font-bold text-footer mb-2 text-sm">
            {t("footer-usefull-links")}
          </h1>
          <ul>
            {linkPack1.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className="hover:underline hover:text-secondary hover:font-semibold flex text-xs"
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src={arrow}
                    alt="arrow-icon"
                  />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 leading-7 ">
          <h1 className="font-bold text-footer mb-2 text-sm">
            {t("footer-our-services")}
          </h1>
          <ul className="flex flex-col gap-2 ">
            {linkPack2.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className="hover:underline hover:text-secondary  flex text-xs"
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src={arrow}
                    alt="arrow-icon"
                  />
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-col gap-2 ">
          <h1 className="font-bold text-footer text-sm">
            {t("footer-our-social-networks")}
          </h1>
          <p className="text-xs">{t("footer-our-sn-text")}</p>
          <div className="flex gap-4 sm:gap-12 md:gap-5 items-center">
            {socialMediaLinks.map((socialMedia, index) => (
              <Link
                key={index}
                to={socialMedia.link}
                className="bg-primary p-2 rounded-lg hover:bg-footerSocialHover sm:p3"
              >
                <img
                  className={socialMedia.size}
                  src={socialMedia.icon}
                  alt={socialMedia.alt}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary bg-opacity-5 px-5 py-10 flex flex-col gap-4 md:flex-row md:justify-evenly">
        <p>
          © {t("footer-copyright")}{" "}
          <span className="font-bold">ChainsCharity. </span>
          {t("footer-arr")}
        </p>
        <p>
          {t("footer-designed-by") + " "}
          <span className="text-primary font-bold">Tridents Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
