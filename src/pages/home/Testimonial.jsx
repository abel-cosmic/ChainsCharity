import CardTestimonial from "../../assets/components/CardTestimonial";
import SingleImageSlider from "../../assets/components/SingleImageSlider";
import profile from "./../../assets/images/persons/profile (1).png";
import {motion} from "framer-motion";
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
    <motion.div
      initial={{x:"-100vw"}}
      animate={{x:0}}
     className="cover-image flex flex-row items-center justify-center py-20">
      <motion.div
      initial={{scaleX:0,scaleY:0}}
      animate={{scaleX:1,scaleY:1}}
      transition={{delay:1}}
      >
        <SingleImageSlider
          sliders={slides}
          sliderButtons={"none"}
          Component={CardTestimonial}
        />
      </motion.div>
    </motion.div>
  );
};
export default Testimonial;
