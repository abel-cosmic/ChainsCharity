import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ profile }) => {
  const divImageStyle = {
    backgroundImage: `url(${profile.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="profileCard bg-neutral flex flex-col w-[20rem] hover:shadow-blue"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={divImageStyle} className="h-[20rem]  max-md:w-[300px]">
        <div
          className={`socla-media-link flex items-end gap-5 mb-2 self-center justify-center pb-10 h-[20rem] ${
            isHovered ? "visible" : "hidden"
          }`}
        >
          <Link
            to={profile.socialMedia.twitter}
            className="bg-primary bg-opacity-70 p-2 rounded-lg hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src="src/assets/images/social medias/twitter.svg"
              alt="twitter-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.instagram}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src="src/assets/images/social medias/instagram.svg"
              alt="instagram-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.facebook}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src="src/assets/images/social medias/facebook.svg"
              alt="facebook-icon"
            />
          </Link>
          <Link
            to={profile.socialMedia.linkedin}
            className="bg-primary bg-opacity-70 p-2 rounded-lg  hover:bg-opacity-100"
          >
            <img
              className="w-[1.65rem]"
              src="src/assets/images/social medias/linkedin.svg"
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
