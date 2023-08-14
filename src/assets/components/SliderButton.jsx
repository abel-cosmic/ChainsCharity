const SliderButton = ({ img, path, position }) => {
  return (
    <button className={`mr-2 absolute ${position} w-20 max-md:w-10 max-lg:w-14`} onClick={path}>
      <img src={img} alt="icon"  className="max-lg:w-8"/>
    </button>
  );
};
export default SliderButton;
