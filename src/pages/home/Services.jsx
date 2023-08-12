import CardServices from "../../assets/components/CardServices";
import PlaceHolder from "../../assets/components/PlaceHolder";
import basket from "./../../assets/images/icons/Group (2).svg";

export default function Services() {
  const services = [
    {
      id: 1,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 2,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 3,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 4,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 5,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      id: 6,
      image: basket,
      heading: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10 py-10 px-4 justify-center">
      <PlaceHolder text="SERVICES" />
      <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
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
