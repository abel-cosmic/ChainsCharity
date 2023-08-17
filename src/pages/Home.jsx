import About from "./home/About";
import Banner from "./home/Banner";
import Contacts from "./home/Contact";
import EventsPage from "./home/EventsPage";
import Footer from "./home/Footer";
import NavigationBar from "./home/NavigationBar";
import NewsLetter from "./home/NewsLetter";
import OurAim from "./home/OurAim";
import OverViews from "./home/OverViews";
import Services from "./home/Services";
import Team from "./home/Team";
import Testimonial from "./home/Testimonial";
import TopNavBar from "./home/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar/>
      <NavigationBar/>
      <Banner/>
      <OurAim />
      <About />
      <OverViews/>
      <Services />
      <Testimonial />
      <EventsPage />
      <Team/>
      <Contacts />
      <NewsLetter/>
      <Footer/>
    </>
  );
}
