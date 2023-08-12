const CardInfo = ({ icon, title, sub }) => {
  return (
    <div className="flex flex-col w-full items-center font-semibold shadow-cust py-10 px-14 gap-2 h-[15rem]">
      <div className=" p-4 border-dashed border-primary border-2 rounded-full">
        <img src={icon} alt="icon" className="w-10 h-10 object-contain"/>
      </div>
      <h1>{title}</h1>
      <h1 className="text-center">{sub}</h1>
    </div>
  );
};
export default CardInfo;
