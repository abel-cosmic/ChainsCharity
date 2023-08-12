import CardInfo from "../../assets/components/CardInfo";
import PlaceHolder from "../../assets/components/PlaceHolder";
import location from "../../assets/images/icons/Group 7.svg";
const info = [
  {
    icon: location,
    title: "Our Address",
    sub: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: location,
    title: "Our Address",
    sub: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: location,
    title: "Our Address",
    sub: "A108 Adam Street, New York, NY 535022",
  },
];
const Contacts = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="flex flex-col  w-[40rem] items-center justify-center gap-6">
        <PlaceHolder text="EVENTS" />
        <h1 className="font-bold text-3xl">
          Check our <span className="text-primary">Events</span>
        </h1>
        <p className="font-medium text-center">
          “Changing Lives Through Soap Recycling. Our goal: minimize waste,
          boost hygiene by repurposing discarded soaps. Donated 350+ soaps,
          empowering underserved communities for cleanliness and health. Join
          our compassionate chain for lasting impact.”
        </p>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-row gap-14">
          <div className="w-[54%]">
            <CardInfo
              icon={info[0].icon}
              sub={info[0].sub}
              title={info[0].title}
            />
          </div>
          <div className="w-[25%]">
            <CardInfo
              icon={info[1].icon}
              sub={info[1].sub}
              title={info[1].title}
            />
          </div>
          <div className="w-[25%]">
            <CardInfo
              icon={info[2].icon}
              sub={info[2].sub}
              title={info[2].title}
            />
          </div>
        </div>
        <div className="flex flex-row gap-16 w-full h-fit">
          <iframe
            className="rounded-xl w-1/2 h-[32rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6256.250506600523!2d38.71797160763153!3d8.9545593713985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b813e5ca20165%3A0x23b28360006aa821!2sHope%20University%20College%20hall!5e0!3m2!1sen!2set!4v1686243415813!5m2!1sen!2set"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form
            action=""
            className="w-1/2 shadow-cust flex flex-col  gap-10 items-center p-10"
          >
            <div className="flex flex-row gap-20 w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-6 py-2  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-6  py-2  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
              />
            </div>
            <div className="flex flex-col gap-10 w-full">
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-6  py-2  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full pl-6 pt-2 pb-[12rem]  border-black  border-[0.8px] rounded focus:border-[#0D82BE]"
              />
            </div>
            <input
              type="submit"
              value="Send Message"
              className="bg-primary bg-opacity-90 text-white px-10 py-2 rounded hover:bg-opacity-100"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
