import PlaceHolder from "../../assets/components/PlaceHolder";
import left from "../../assets/images/persons/jason-goodman-Oalh2MojUuk-unsplash 1.png";
import speaker from "../../assets/images/icons/speaker.svg";
import soap from "../../assets/images/icons/soap.svg";
import heart from "../../assets/images/icons/heart.svg";
import CardAbout from "../../assets/components/CardAbout";
const cards = [
  {
    image: speaker,
    title: "Heartbreaking News: 300,000 Children Lost due to Lack of Soap",
    subtext:
      "Calling all hearts to unite! Today, we bring to your attention a devastating crisis that has claimed the lives of 300,000 innocent children. Their loss is a poignant reminder of how something as basic as soap can make a life-saving difference.",
  },
  {
    image: soap,
    title: "The Power of Soap: Saving Lives and Creating Hope ",
    subtext:
      "It's hard to fathom that something as simple as soap could hold such life-saving potential. But in impoverished communities across the globe, access to basic hygiene essentials can be a matter of life or death. Chains Charity has made it its mission to tackle this critical issue and prevent further tragedies.",
  },
  {
    image: heart,
    title: " The Impact of Your Support ",
    subtext:
      "Chains Charity has been working tirelessly to distribute soap and hygiene kits to underprivileged communities in regions where access to clean water and sanitation is scarce. By providing these essentials, we empower children and their families to combat preventable diseases and break the vicious cycle of poverty.",
  },
];
const About = () => {
  return (
    <div className="flex flex-col items-center py-10 gap-4 bg-secondary bg-opacity-5 max-md:gap-10">
      <div className="flex flex-col  w-[40rem] items-center justify-center gap-6 max-md:flex max-md:flex-col max-md:w-full max-md:gap-4">
        <PlaceHolder text="ABOUT" />
        <h1 className="font-bold text-3xl max-md:text-xl">
          Find Out More <span className="text-primary">About Us </span>
        </h1>
        <p className="font-medium text-center max-md:text-sm">
          Together, we believe in the power of small actions that create a BIG
          impact! Chains Charity is proud to be a non-profit organization on a
          mission to recycle soap and bring smiles to the faces of those in need
        </p>
      </div>
      <div className="flex flex-row gap-20 max-md:flex-col max-lg:flex-col max-md:gap-10">
        <img
          src={left}
          alt="section image"
          className="rounded-[2rem] max-lg:rounded-none max-md:w-full"
        />
        <div className="flex  flex-col gap-10 max-md:items-center max-lg:px-4 max-md:gap-4">
          <h1 className="text-2xl font-bold max-md:text-xl">
            Chains Charity: Making a Difference, One Soap at a Time
          </h1>
          <p className="w-[40rem] max-md:flex max-md:flex-col max-md:w-full max-md:text-sm">
            Chains Charity has been working tirelessly to distribute soap and
            hygiene kits to underprivileged communities in regions where access
            to clean water and sanitation is scarce. By providing these
            essentials, we empower children and their families to combat
            preventable diseases and break the vicious cycle of poverty.
          </p>
          <div className="flex flex-col gap-10  max-md:w-full">
            {cards.map((card, index) => (
              <CardAbout
                key={index}
                image={card.image}
                title={card.title}
                subtext={card.subtext}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
