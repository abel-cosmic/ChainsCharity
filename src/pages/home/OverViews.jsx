import StatisticsCard from "../../assets/components/StatisticsCard";

const OverViews = () => {
  const statistics = [
    {
      id: 0,
      number: 232,
      title: "Happy Clients",
      image: "src/assets/images/icons/happy-icon.svg",
      alt: "happy-icon",
    },
    {
      id: 1,
      number: 4,
      title: "Projects",
      image: "src/assets/images/icons/projects.svg",
      alt: "projects-icon",
    },
    {
      id: 2,
      number: 180,
      title: "Hours of Support",
      image: "src/assets/images/icons/support.svg",
      alt: "support-icon",
    },
    {
      id: 3,
      number: 14,
      title: "Hard Workers",
      image: "src/assets/images/icons/hard-workers.svg",
      alt: "workers-icon",
    },
  ];
  return (
    <div className="flex gap-5 p-10">
      {statistics.map((data) => (
        <StatisticsCard stat={data} />
      ))}
    </div>
  );
};

export default OverViews;
