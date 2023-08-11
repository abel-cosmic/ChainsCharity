import CardAim from "../../assets/components/CardAim";
import PlaceHolder from "../../assets/components/PlaceHolder";
import recylce from "./../../assets/images/icons/recycle-2.svg";
import recylce_blue from "./../../assets/images/icons/recycle-2 (1).svg";
import arms_blue from "./../../assets/images/icons/Layer_1.svg";
import arms from "./../../assets/images/icons/Layer_1 (1).svg";
import earth from "./../../assets/images/icons/SVGRepo_iconCarrier (1).svg";
import earth_blue from "./../../assets/images/icons/SVGRepo_iconCarrier (2).svg";
export default function OurAim() {
  const card_aim = [
    {
      id: 1,
      img2: recylce_blue,
      img1: recylce,
      heading: "Recycling for a Brighter Tomorrow",
      description:
        "Our soap recycling factory promotes sustainability by collecting, recycling, and sanitizing discarded soap from hotels and hospitality partners, transforming it into a valuable resource for the less fortunate.",
    },
    {
      id: 2,
      img2: arms_blue,
      img1: arms,
      heading: "Lending a Helping Hand",
      description:
        "At Chains Charity, we provide soap and hygiene essentials to those in need. By donating repurposed soaps to shelters, orphanages, and communities, we make a positive difference in countless lives.",
    },
    {
      id: 3,
      img2: earth_blue,
      img1: earth,
      heading: "Join Our Cause",
      description:
        "Your support is what keeps us going! We invite all of you to be part of this incredible journey by contributing to our cause. Whether through donations, volunteering, or simply spreading the word, you can help us reach even more communities and touch more lives.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-20 py-10">
      <PlaceHolder text="OUR AIM" />
      <div className="flex flex-row gap-10">
        {console.log(card_aim)}
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
