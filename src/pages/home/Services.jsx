import CardServices from "../../assets/components/CardServices";
import PlaceHolder from "../../assets/components/PlaceHolder";
import basket from "./../../assets/images/icons/Group (2).svg";
import water from "./../../assets/images/icons/Vector (1).png";
import mango from "./../../assets/images/icons/Vector (3).png";
import hat from "./../../assets/images/icons/Vector (4).png";
import { useTranslation } from "react-i18next";
export default function Services() {
  const { t } = useTranslation();
  const services = [
    {
      id: 1,
      image: basket,
      heading: t("service-heading1"),
      description: t("service-sub1"),
    },
    {
      id: 2,
      image: water,
      heading: t("service-heading2"),
      description: t("service-sub2"),
    },
    {
      id: 3,
      image: mango,
      heading: t("service-heading3"),
      description: t("service-sub3"),
    },
    {
      id: 4,
      image: hat,
      heading: t("service-heading4"),
      description: t("service-sub4"),
    },
  ];
  return (
    <div className="flex flex-col items-center gap-20 py-10 px-4 justify-center max-md:gap-10">
      <PlaceHolder text={t("services")} />
      <div className="flex flex-row flex-wrap gap-32 max-lg:gap-6 items-center justify-center">
        {services.map((service) => (
          <CardServices
            key={service.id}
            image={service.image}
            s
            heading={service.heading}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
