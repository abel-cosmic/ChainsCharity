import PlaceHolder from "../../assets/components/PlaceHolder";
import left from "../../assets/images/persons/jason-goodman-Oalh2MojUuk-unsplash 1.png";
import speaker from "../../assets/images/icons/speaker.svg";
import soap from "../../assets/images/icons/soap.svg";
import heart from "../../assets/images/icons/heart.svg";
import CardAbout from "../../assets/components/CardAbout";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const cards = [
    {
      image: speaker,
      title: t("about-card1-title"),
      subtext: t("about-card1-subtext"),
    },
    {
      image: soap,
      title: t("about-card2-title"),
      subtext: t("about-card2-subtext"),
    },
    {
      image: heart,
      title: t("about-card3-title"),
      subtext: t("about-card3-subtext"),
    },
  ];
  return (
    <div
      className="flex flex-col items-center py-10 gap-4 bg-secondary bg-opacity-5 max-md:gap-10"
      id="about"
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="flex flex-col  w-[40rem] items-center justify-center gap-6 max-md:flex max-md:flex-col max-md:w-full max-md:gap-4"
      >
        <PlaceHolder text={t("about")} />
        <h1 className="font-bold text-3xl max-md:text-xl">
          {t("about-sub")}{" "}
          <span className="text-primary">{t("about-sub-next")}</span>
        </h1>
        <p className="font-medium text-center max-md:text-sm">
          {t("about-context")}
        </p>
      </motion.div>
      <div className="flex flex-row gap-20 max-md:flex-col max-lg:flex-col max-md:gap-10">
        <motion.img
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          src={left}
          alt="section image"
          className="rounded-[2rem] max-lg:rounded-none max-md:w-full"
        />
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="flex  flex-col gap-10 max-md:items-center max-lg:px-4 max-md:gap-4"
        >
          <h1 className="text-2xl font-bold max-md:text-xl">
            {t("about-header")}
          </h1>
          <p className="w-[40rem] max-md:flex max-md:flex-col max-md:w-full max-md:text-sm">
            {t("about-subtext")}
          </p>
          <div className="flex flex-col gap-10  max-md:w-full">
            {cards.map((card, index) => (
              <CardAbout
                key={index}
                image={card.image}
                title={card.title}
                subtext={card.subtext}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
