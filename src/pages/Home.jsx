import About from "./home/About";
import Contacts from "./home/Contact";
import EventsPage from "./home/EventsPage";
import OurAim from "./home/OurAim";
import Services from "./home/Services";
import Testimonial from "./home/Testimonial";

export default function Home() {
  return (
    <>
      <OurAim />
      <About />
      <Services />
      <Testimonial />
      <EventsPage />\
      <Contacts />
    </>
  );
}
