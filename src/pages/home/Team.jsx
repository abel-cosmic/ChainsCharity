import PlaceHolder from "../../assets/components/PlaceHolder";
import Profile from "../../assets/components/Profile";

const Team = () => {
  const people = [
    {
      name: "John Doe",
      image: "src/assets/images/persons/team-1.png",
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
      image: "src/assets/images/persons/team-2.png",
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
      image: "src/assets/images/persons/team-3.png",
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
      image: "src/assets/images/persons/team-3.png",
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
      image: "src/assets/images/persons/team-4.png",
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
    <div className="bg-primary bg-opacity-5 flex flex-col items-center gap-5 pt-10 pb-24 px-20">
      <PlaceHolder text="TEAM" />
      <h1 className="font-bold text-3xl max-md:text-xl">
        Our Hardworking <span className="text-primary">Team</span>
      </h1>
      <blockquote className="w-[40rem] text-center text-l font-semibold">
        "At Chains Charity, our team is made up of passionate and dedicated
        individuals who are committed to breaking the cycle of poverty and
        making a positive impact in our community."
      </blockquote>
      <div className="flex justify-center gap-10 flex-wrap mt-10">
        {people.map((person) => (
          <Profile profile={person} />
        ))}
      </div>
    </div>
  );
};

export default Team;
