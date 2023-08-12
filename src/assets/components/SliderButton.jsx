const SliderButton = ({ img, path, position }) => {
  return (
    <button className={`mr-2 absolute ${position} w-20`} onClick={path}>
      <img src={img} alt="icon" />
    </button>
  );
};
export default SliderButton;
