import CardTestimonial from "../../assets/components/CardTestimonial";
import SingleImageSlider from "../../assets/components/SingleImageSlider";
import profile from "./../../assets/images/persons/profile (1).png";
const slides = [
  {
    image: profile,
    name: "Saul Serman",
    title: "Freelancer",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitoraentum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquameget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: profile,
    name: "Saul Serman",
    title: "Freelancer",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitoraentum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquameget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: profile,
    name: "Saul Serman",
    title: "Freelancer",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitoraentum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquameget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: profile,
    name: "Saul Serman",
    title: "Freelancer",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitoraentum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquameget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: profile,
    name: "Saul Serman",
    title: "Freelancer",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitoraentum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquameget nibh et. Maecen aliquam, risus at semper.",
  },
];

const Testimonial = () => {
  return (
    <div className="cover-image flex flex-row items-center justify-center">
      <SingleImageSlider
        sliders={slides}
        sliderButtons={"none"}
        Component={CardTestimonial}
      />
    </div>
  );
};
export default Testimonial;
