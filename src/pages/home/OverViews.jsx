import StatisticsCard from "../../assets/components/StatisticsCard";
import { useTranslation } from "react-i18next";

const OverViews = () => {
  const { t } = useTranslation();
  const statistics = [
    {
      id: 0,
      number: 232,
      title: t("overview-happy-clients"),
      image: "src/assets/images/icons/happy-icon.svg",
      alt: "happy-icon",
    },
    {
      id: 1,
      number: 4,
      title: t("projects"),
      image: "src/assets/images/icons/projects.svg",
      alt: "projects-icon",
    },
    {
      id: 2,
      number: 180,
      title: t("overview-hours-of-support"),
      image: "src/assets/images/icons/support.svg",
      alt: "support-icon",
    },
    {
      id: 3,
      number: 14,
      title: t("overview-hard-workers"),
      image: "src/assets/images/icons/hard-workers.svg",
      alt: "workers-icon",
    },
  ];
  return (
    <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center lg:flex-nowrap gap-5 p-10">
      {statistics.map((data) => (
        <StatisticsCard stat={data} />
      ))}
    </div>
  );
};

export default OverViews;
