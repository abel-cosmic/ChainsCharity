import CardAim from "../../assets/components/CardAim";
import PlaceHolder from "../../assets/components/PlaceHolder";
import recylce from "./../../assets/images/icons/recycle-2.svg";
import recylce_blue from "./../../assets/images/icons/recycle-2 (1).svg";
import arms_blue from "./../../assets/images/icons/Layer_1.svg";
import arms from "./../../assets/images/icons/Layer_1 (1).svg";
import earth from "./../../assets/images/icons/SVGRepo_iconCarrier (1).svg";
import earth_blue from "./../../assets/images/icons/SVGRepo_iconCarrier (2).svg";
import { useTranslation } from "react-i18next";
export default function OurAim() {
  const { t } = useTranslation();
  const card_aim = [
    {
      id: 1,
      img2: recylce_blue,
      img1: recylce,
      heading: t("aim-heading1"),
      description: t("aim-description1"),
    },
    {
      id: 2,
      img2: arms_blue,
      img1: arms,
      heading: t("aim-heading2"),
      description: t("aim-description2"),
    },
    {
      id: 3,
      img2: earth_blue,
      img1: earth,
      heading: t("aim-heading3"),
      description: t("aim-description3"),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-10 max-md:gap-10 max-md:py-4">
      <PlaceHolder text={t("aim")} />
      <div className="flex flex-row flex-wrap items-center gap-10 justify-center">
        {card_aim.map((card) => (
          <CardAim
            img1={card.img1}
            img2={card.img2}
            heading={card.heading.toString()}
            description={card.description.toString()}
          />
        ))}
      </div>
    </div>
  );
}
