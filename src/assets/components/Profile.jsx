import { useState } from "react";
import { Link } from "react-router-dom";
import twitter from "./../../assets/images/social medias/twitter.svg";
import instagram from "./../../assets/images/social medias/instagram.svg";
import facebook from "./../../assets/images/social medias/facebook.svg";
import linkedin from "./../../assets/images/social medias/linkedin.svg";

const Profile = ({ profile }) => {
  const divImageStyle = {
    backgroundImage: `url(${profile.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  const [isHovered, setHovered] = useState(false);
  return (
    <div className=" bg-neutral flex flex-col w-[20rem] hover:shadow-blue"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div style={divImageStyle} className="h-[20rem] ">
        <div className={`${isHovered ? "flex" : "hidden"} flex items-end gap-5 mb-2 self-center justify-center pb-4 h-[20rem]`}>
          <Link
            to={profile.socialMedia.twitter}
            className="bg-primary bg-opacity-70 p-2 rounded-lg hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src={twitter}
              alt="twitter-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.instagram}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src={instagram}
              alt="instagram-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.facebook}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src={facebook}
              alt="facebook-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.linkedin}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src={linkedin}
              alt="linkedin-icon"
            />
          </Link>
        </div>
      </div>
      <div className="ml-6 flex flex-col my-1 lg:gap-1 md:my-3">
        <p className="text-lg md:text-2xl font-bold">{profile.name}</p>
        <p className="text-sm md:text-l">{profile.position}</p>
      </div>
    </div>
  );
};

export default Profile;
