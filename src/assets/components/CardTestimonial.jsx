const CardTestimonial = ({ image, name, title, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-white w-[50rem] m-auto max-md:gap-2">
      <img
        src={image}
        alt="profile"
        className="rounded-full w-32 max-md:w-16"
      />
      <h1 className="font-extrabold text-3xl max-md:text-xl">{name}</h1>
      <h3 className="font-semibold text-2xl max-md:text-base">{title}</h3>
      <p className="font-medium text-testimonial text-lg text-center max-md:text-sm">
        {`"`}
        {description}
        {`"`}
      </p>
    </div>
  );
};
export default CardTestimonial;
