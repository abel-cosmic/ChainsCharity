const TopNavBar = () => {
  return (
    <div className="flex justify-around  align-middle bg-primary text-white font-semibold p-5">
      <div className="flex flex-row w-[25rem] justify-between items-center">
        <div className="flex gap-3">
          <img
            src="src/assets/images/icons/phone.svg"
            alt="phone-icon"
            className="w-[1rem]"
          />
          <p>+2519 999 999 999</p>
        </div>
        <div className="flex gap-3">
          <img
            src="src/assets/images/icons/mail.svg"
            alt="phone-icon"
            className="w-[1.5rem]"
          />
          <p>contact@gmail.com</p>
        </div>
      </div>
      <div className="flex gap-10">
        <a href="#">
          <img
            className="w-[1.5rem]"
            src="src/assets/images/social medias/twitter.svg"
            alt="twitter-icon"
          />
        </a>
        <a href="#">
          <img
            className="w-[1.5rem]"
            src="src/assets/images/social medias/linkedin.svg"
            alt="linkedin-icon"
          />
        </a>
        <a href="#">
          <img
            className="w-[1.5rem]"
            src="src/assets/images/social medias/instagram.svg"
            alt="instagram-icon"
          />
        </a>
        <a href="#">
          <img
            className="w-[1.5rem]"
            src="src/assets/images/social medias/facebook.svg"
            alt="facebook-icon"
          />
        </a>
        <a href="#">
          <img
            className="w-[1.5rem]"
            src="src/assets/images/social medias/tiktok.svg"
            alt="tiktok-icon"
          />
        </a>
        <a href="#">
          <img
            className="w-[2rem]"
            src="src/assets/images/social medias/youtube.svg"
            alt="youtube-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default TopNavBar;
