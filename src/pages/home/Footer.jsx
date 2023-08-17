import { Link } from "react-router-dom";

const Footer = () => {

  const secondary = ["bg-primary  hover:font-bold font-semibold","bg-[#fff]","text-white"];
  const linkPack1 = [
    { link: "", text: "Home" },
    { link: "", text: "About" },
    { link: "", text: "Services" },
    { link: "", text: "Events" },
    { link: "", text: "Teams" },
    { link: "", text: "Contact" },
  ];
  const linkPack2 = [
    { link: "", text: "Education Empowerment initiatives" },
    { link: "", text: "Nutrition and Food Security Programs" },
    { link: "", text: "Clean Water  Initiatives" },
    { link: "", text: "Microfinance and Enterpreneurship Support" },
  ];
  const socialMediaData = [
    { name: "Twitter", icon: "twitter.svg", link: "" },
    { name: "LinkedIn", icon: "linkedin.svg", link: "" },
    { name: "Instagram", icon: "instagram.svg", link: "" },
    { name: "Facebook", icon: "facebook.svg", link: "" },
    { name: "TikTok", icon: "tiktok.svg", link: "" },
    { name: "YouTube", icon: "youtube.svg", link: "" },
  ];
  return (
    <footer>
      <div className="flex flex-col px-5 md:flex-row md:gap-10 flex-wrap md:justify-evenly lg:px-20 md:flex-nowrap">
        <div className="">
          <img
            className="w-[10rem]"
            src="src/assets/images/Logo.png"
            alt="chains-logo"
          />
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
          <h1 className="font-bold text-footer mb-2 text-sm">Usefull links</h1>
          <ul>
            {linkPack1.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className="hover:underline hover:text-secondary hover:font-semibold flex text-xs"
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src="src/assets/images/icons/Vector (copy).svg"
                    alt="arrow-icon"
                  />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 leading-7 ">
          <h1 className="font-bold text-footer mb-2 text-sm">Our Services</h1>
          <ul>
            {linkPack2.map((item) => (
              <li>
                <Link
                  to={item.link}
                  className="hover:underline hover:text-secondary hover:font-semibold flex text-xs"
                >
                  <img
                    className="mr-5 md:mr-2 w-[0.3rem]"
                    src="src/assets/images/icons/Vector (copy).svg"
                    alt="arrow-icon"
                  />
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-col gap-2 ">
          <h1 className="font-bold text-footer text-sm">
            Our Social Networks
          </h1>
          <p className="text-xs">
            Follow us on our social medias for updated news and to support our
            huge influencing family.
          </p>
          <div className="flex gap-4 sm:gap-12 md:gap-5 items-center">
            <Link className="bg-primary p-2 rounded-lg hover:bg-footerSocialHover sm:p3">
              <img
                className="w-[1rem]  sm:w-6 "
                src="src/assets/images/social medias/twitter.svg"
                alt="twitter-icon"
              />
            </Link>
            <Link className="bg-primary p-2 rounded-lg hover:bg-footerSocialHover sm:p3 ">
              <img
                className="w-[1rem] sm:w-6"
                src="src/assets/images/social medias/instagram.svg"
                alt="instagram-icon"
              />
            </Link>
            <Link className="bg-primary p-2 rounded-lg  hover:bg-footerSocialHover sm:p3">
              <img
                className="w-[1rem] sm:w-6"
                src="src/assets/images/social medias/facebook.svg"
                alt="facebook-icon"
              />
            </Link>
            <Link className="bg-primary p-2 rounded-lg  hover:bg-footerSocialHover sm:p3 ">
              <img
                className="w-[1rem] sm:w-6"
                src="src/assets/images/social medias/linkedin.svg"
                alt="linkedin-icon"
              />
            </Link>

            <Link className="bg-primary p-2 rounded-lg  hover:bg-footerSocialHover sm:p3 ">
              <img
                className="w-[1rem] sm:w-6"
                src="src/assets/images/social medias/tiktok.svg"
                alt="ticktok-icon"
              />
            </Link>
            <Link className="bg-primary p-2 rounded-lg hover:bg-footerSocialHover sm:p3 ">
              <img
                className="w-[1.5rem] sm:w-8 "
                src="src/assets/images/social medias/youtube.svg"
                alt="youtube-icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-primary bg-opacity-5 px-5 py-10 flex flex-col gap-4 md:flex-row md:justify-evenly">
        <p>
          © Copyright <span className="font-bold">ChainsCharity.</span> All
          Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <span className="text-primary font-bold">Tridents Technologies</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
