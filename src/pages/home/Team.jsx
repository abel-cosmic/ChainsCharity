import PlaceHolder from "../../assets/components/PlaceHolder";
import Profile from "../../assets/components/Profile";
import { useTranslation } from "react-i18next";
import person1 from "./../../assets/images/persons/team-1.png";
import person2 from "./../../assets/images/persons/team-2.png";
import person3 from "./../../assets/images/persons/team-3.png";
import person4 from "./../../assets/images/persons/team-4.png";


const Team = () => {
  const { t } = useTranslation();

  const people = [
    {
      name: "John Doe",
      image: person1,
      position: "Web Developer",
      socialMedia: {
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      image: person2,
      position: "Graphic Designer",
      socialMedia: {
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
    {
      name: "Michael Johnson",
      image: person3,
      position: "Software Engineer",
      socialMedia: {
        twitter: "https://twitter.com/michaeljohnson",
        instagram: "https://instagram.com/michaeljohnson",
        facebook: "https://facebook.com/michaeljohnson",
        linkedin: "https://linkedin.com/in/michaeljohnson",
      },
    },
    {
      name: "Emily Davis",
      image: person4,
      position: "UX Designer",
      socialMedia: {
        twitter: "https://twitter.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
      },
    },
    {
      name: "Emily Davis",
      image: person1,
      position: "UX Designer",
      socialMedia: {
        twitter: "https://twitter.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        facebook: "https://facebook.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
      },
    },
  ];

  return (
    <div className="bg-primary bg-opacity-5 flex flex-col items-center gap-5 pt-10 pb-10 md:pb-24 px-20">
      <PlaceHolder text={t("team")} />
      <h1 className="font-bold text-3xl max-md:text-lg">
        {t("team-our-hardworking") + " "} 
        <span className="text-primary">{t("team")}</span>
      </h1>
      <blockquote className="w-full lg:w-[40rem] text-center lg:text-l font-semibold">
        {t("team-quote")}
      </blockquote>
      <div className="flex justify-center gap-5 lg:gap-10 flex-wrap mt-10">
        {people.map((person) => (
          <Profile profile={person} />
        ))}
      </div>
    </div>
  );
};

export default Team;
