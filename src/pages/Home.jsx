import AnimateComponents from "../assets/components/AnimateComponents";
import BackToTopBtn from "../assets/components/BackToTopBtn";
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
    <div className="relative">
      <AnimateComponents>
        <TopNavBar />
      </AnimateComponents>
      <AnimateComponents>
        <NavigationBar/>
      </AnimateComponents>
      <AnimateComponents>
        <Banner />
      </AnimateComponents>
      <AnimateComponents>
        <OurAim />
      </AnimateComponents>
      <AnimateComponents>
        <About />
      </AnimateComponents>
      <AnimateComponents>
        <OverViews />
      </AnimateComponents>
      <AnimateComponents>
        <Services />
      </AnimateComponents>
      <AnimateComponents>
        <Testimonial />
      </AnimateComponents>
      <AnimateComponents>
        <EventsPage />
      </AnimateComponents>
      {/* <AnimateComponents  ><Team/></AnimateComponents> */}
      <AnimateComponents>
        <Contacts />
      </AnimateComponents>
      <AnimateComponents>
        <Footer />
      </AnimateComponents>
      <AnimateComponents>
        <BackToTopBtn />
      </AnimateComponents>
    </div>
  );
}
