import PlaceHolder from "../../assets/components/PlaceHolder";
import ImageSlider from "../../assets/components/ImageSlider";
import slide2 from "../../assets/images/persons/joel-muniz-3k3l2brxmwQ-unsplash.png";
import slide3 from "../../assets/images/persons/joel-muniz-A4Ax1ApccfA-unsplash.png";
import slide4 from "../../assets/images/persons/joel-muniz-qvzjG2pF4bE-unsplash.png";

const images = [slide2, slide3, slide4, slide2, slide3, slide4];

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center py-10 gap-10">
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
      <div className="w-full">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};
export default EventsPage;
