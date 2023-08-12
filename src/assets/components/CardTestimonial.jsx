import profile from "./../images/persons/profile (1).png";

const CardTestimonial = ({ image, name, title, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-white w-[50rem] m-auto">
      <img src={profile} alt="profile" className="rounded-full w-32" />
      <h1 className="font-extrabold text-3xl">Saul Serman</h1>
      <h3 className="font-semibold text-2xl">Freelancer</h3>
      <p className="font-medium text-testimonial text-lg text-center">
        {`"`}Proin iaculis purus consequat sem cure digni ssim donec porttitora
        entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
        eget nibh et. Maecen aliquam, risus at semper.{`"`}
      </p>
    </div>
  );
};
export default CardTestimonial;
