import PlaceHolder from "../../assets/components/PlaceHolder";
import ImageSlider from "../../assets/components/ImageSlider";
import slide2 from "../../assets/images/persons/joel-muniz-3k3l2brxmwQ-unsplash.png";
import slide3 from "../../assets/images/persons/joel-muniz-A4Ax1ApccfA-unsplash.png";
import slide4 from "../../assets/images/persons/joel-muniz-qvzjG2pF4bE-unsplash.png";
import { useTranslation } from "react-i18next";

const images = [slide2, slide3, slide4, slide2, slide3, slide4];

const EventsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center py-10 gap-10 max-md:gap-6">
      <div className="flex flex-col  w-[40rem] items-center justify-center gap-6 max-md:gap-2 max-md:w-full">
        <PlaceHolder text={t('events')} />
        <h1 className="font-bold text-3xl max-md:text-xl">
         
         {t('events-sub')} <span className="text-primary">{t('events-next')}</span>
        </h1>
        <p className="font-medium text-center max-md:flex max-md:flex-col max-md:w-full max-md:text-sm">
          {t("events-text")}
        </p>
      </div>
      <div className="w-full">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};
export default EventsPage;
