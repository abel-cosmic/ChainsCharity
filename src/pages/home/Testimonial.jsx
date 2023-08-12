import CardTestimonial from "../../assets/components/CardTestimonial";
import ImageSlider from "../../assets/components/ImageSlider";
import bg from "./../../assets/images/persons/testimonials-bg.png";
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
      <ImageSlider sliders={slides} />
    </div>
  );
};
export default Testimonial;
