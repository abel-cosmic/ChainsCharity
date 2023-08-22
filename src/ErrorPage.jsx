import arrow from "./assets/images/icons/Icon.svg";
import error from "./assets/images/icons/404 Error-rafiki 1.png";
import { Link } from "react-router-dom";
import TopNavBar from "./pages/home/TopNavBar";
import NavigationBar from "./pages/home/NavigationBar";
import Footer from "./pages/home/Footer";
export default function ErrorPage() {
  return (
    <div>
      <TopNavBar />
      <NavigationBar />
      <div className="flex flex-row items-center gap-0 max-lg:flex-col-reverse justify-center">
        <div className="flex flex-col gap-10 max-lg:items-center">
          <div className="flex flex-col gap-2 w-[25rem] max-lg:text-center">
            <h1 className="font-bold text-[48px]">Oops.... </h1>
            <h2 className="text-[32px]">Page not found </h2>
            <p className="text-xl">
              This Page doesn`t exist or was removed! We suggest you back to
              home.
            </p>
          </div>
          <Link to="/">
            <button className="bg-primary bg-opacity-90 text-white px-10 py-2 flex flex-row items-center gap-2 rounded hover:bg-opacity-100 w-fit max-lg:w-full max-md:mb-5">
              <img src={arrow} alt="arrow" />
              <p>Back to home</p>
            </button>
          </Link>
        </div>
        <img src={error} alt="error 404" />
      </div>
      <Footer variant="blue" />
    </div>
  );
}
