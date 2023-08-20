import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const NewsLetter = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1.2 }}
      className="w-full flex flex-col bg-primary bg-opacity-5 items-center py-28 gap-4 max-md:px-2"
    >
      <p className="font-bold text-3xl max-lg:text-lg">Join Our Newsletter</p>
      <p className="font-semibold text-base max-lg:text-sm text-center">
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
      <form className="flex flex-row gap-0 shadow-cust">
        <input
          type="text"
          required
          className="w-[38rem] h-[2.5rem] max-md:w-[10rem] "
        />
        <button
          type="submit"
          className="bg-primary flex flex-row items center  justify-center bg-opacity-90 hover:bg-opacity-100 cursor-pointer text-white py-2 px-10 max-md:text-sm"
        >
          {t("subscribe")}
        </button>
      </form>
    </motion.div>
  );
};
export default NewsLetter;
