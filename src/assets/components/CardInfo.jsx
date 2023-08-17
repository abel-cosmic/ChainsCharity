const CardInfo = ({ icon, title, sub }) => {
  return (
    <div className="flex flex-col w-full items-center font-semibold shadow-cust py-10 px-14 gap-2 h-[15rem]">
      <div className=" p-4 border-dashed border-primary border-[0.4px] rounded-full max-md:border-[0.2px] max-md:p-2 text-[6px]">
        <img
          src={icon}
          alt="icon"
          className="w-10 h-10 object-contain max-md:w-6 max-md:h-6"
        />
      </div>
      <h1 className="max-md:text-sm">{title}</h1>
      <h1 className="text-center w-[15rem] max-md:text-sm ">{sub}</h1>
    </div>
  );
};
export default CardInfo;
