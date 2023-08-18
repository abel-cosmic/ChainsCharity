import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="banner  bg-no-repeat">
      <div className="flex flex-col gap-5 lg:gap-10 px-10 lg:px-40 py-36 md:pt-60 md:pb-40 text-white">
        <p className="text-2xl lg:text-5xl">{t("banner-welcome")}</p>
        <p className="text-lg lg:text-xl">{t("banner-text")}</p>
        <input
          type="submit"
          value={t('donate-now')}
          className="bg-primary cursor-pointer bg-opacity-90 w-fit text-white px-28 py-4 my-8 rounded text-xl font-semibold hover:bg-opacity-100 max-md:self-start max-lg:text-sm"
        />
      </div>
    </section>
  );
};

export default Banner;
