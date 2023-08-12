const CardAbout = ({ image, title, subtext }) => {
  return (
    <div className="flex flex-row gap-10 w-[45rem] max-md:w-full">
      <div className="shadow-cust flex flex-col h-fit p-6 rounded-full">
        <img src={image} alt="" className="w-[6rem]" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p>{subtext}</p>
      </div>
    </div>
  );
};
export default CardAbout;
