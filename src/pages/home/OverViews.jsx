import StatisticsCard from "../../assets/components/StatisticsCard";
import { useTranslation } from "react-i18next";
import happy from "./../../assets/images/icons/happy-icon.svg";
import projects from "./../../assets/images/icons/projects.svg";
import support from "./../../assets/images/icons/support.svg";
import hardWorkers from "./../../assets/images/icons/hard-workers.svg";

const OverViews = () => {
  const { t } = useTranslation();
  const statistics = [
    {
      id: 0,
      number: 232,
      title: t("overview-happy-clients"),
      image: happy,
      alt: "happy-icon",
    },
    {
      id: 1,
      number: 4,
      title: t("projects"),
      image: projects,
      alt: "projects-icon",
    },
    {
      id: 2,
      number: 180,
      title: t("overview-hours-of-support"),
      image: support,
      alt: "support-icon",
    },
    {
      id: 3,
      number: 14,
      title: t("overview-hard-workers"),
      image: hardWorkers,
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
