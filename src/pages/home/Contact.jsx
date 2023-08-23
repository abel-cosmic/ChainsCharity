import CardForm from "../../assets/components/CardForm";
import CardInfo from "../../assets/components/CardInfo";
import PlaceHolder from "../../assets/components/PlaceHolder";
import location from "../../assets/images/icons/Group 7.svg";
import email from "../../assets/images/icons/ic_outline-email.svg";
import phone from "../../assets/images/icons/material-symbols_call-log.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contacts = () => {
  const { t } = useTranslation();
  const info = [
    {
      icon: location,
      title: t("contact-oa"),
      sub: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: email,
      title: t("contact-email-title"),
      sub: "Contact@example.com",
    },
    {
      icon: phone,
      title: t("contact-call-title"),
      sub: "+1 5589 55488 55",
    },
  ];
  return (
    <div
      className="flex flex-col items-center gap-10 py-10 max-md:py-5"
      id="contact"
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="flex flex-col  w-[40rem] items-center justify-center gap-6 max-md:gap-2 max-md:w-full max-md:px-2"
      >
        <PlaceHolder text={t("contact")} />
        <h1 className="font-bold text-3xl max-md:text-xl">
          {t("contact-with-this") + " "}
          <span className="text-primary">{t("contact-us")}</span>
        </h1>
        <p className="font-medium text-center  max-md:text-sm max-md:flex max-md:flex-col max-md:w-full">
          {t("contact-quote")}
        </p>
      </motion.div>
      <div className="flex flex-col gap-10 max-md:gap-5">
        <div className="flex flex-row gap-8 max-lg:flex-col max-lg:gap-4">
          <div className="w-[50%] max-lg:w-full">
            <CardInfo
              icon={info[0].icon}
              sub={info[0].sub}
              title={info[0].title}
            />
          </div>
          <div className="w-[25%] max-lg:w-full">
            <CardInfo
              icon={info[1].icon}
              sub={info[1].sub}
              title={info[1].title}
            />
          </div>
          <div className="w-[25%] max-lg:w-full">
            <CardInfo
              icon={info[2].icon}
              sub={info[2].sub}
              title={info[2].title}
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 w-full h-fit max-md:flex-col max-md:px-4 max-md:gap-6 max-lg:gap-6">
          <motion.iframe
            initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="rounded-xl w-full h-[32rem] max-md:w-full max-md:h-[20rem] max-md:rounded-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6256.250506600523!2d38.71797160763153!3d8.9545593713985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b813e5ca20165%3A0x23b28360006aa821!2sHope%20University%20College%20hall!5e0!3m2!1sen!2set!4v1686243415813!5m2!1sen!2set"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></motion.iframe>
          <CardForm />
        </div>
      </div>
    </div>
  );
};
export default Contacts;
