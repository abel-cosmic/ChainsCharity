import About from "./home/About";
import Contacts from "./home/Contact";
import EventsPage from "./home/EventsPage";
import NewsLetter from "./home/NewsLetter";
import OurAim from "./home/OurAim";
import Services from "./home/Services";
import Testimonial from "./home/Testimonial";
import TopNavBar from "./home/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar/>
      <OurAim />
      <About />
      <Services />
      <Testimonial />
      <EventsPage />\
      <Contacts />
      <NewsLetter/>
    </>
  );
}
