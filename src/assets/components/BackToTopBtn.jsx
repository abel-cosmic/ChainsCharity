import { useState, useEffect } from "react";
import arrow from "./../images/icons/mdi_arrow-up.svg";

const BackToTopBtn = () => {
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopBtn && (
        <button
          onClick={scrollUp}
          className="flex flex-row items-center justify-center py-4 px-4 rounded bg-primary bg-opacity-90 hover:bg-opacity-100 fixed bottom-6 right-10 "
        >
          <img src={arrow} alt="arrow" className="w-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
