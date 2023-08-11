const PlaceHolder =({text})=> {
  return (
    <div className="flex flex-row items-center px-4 py-2 bg-primary bg-opacity-10 text-secondary font-semibold rounded-full">
      {text}
    </div>
  );
}

export default PlaceHolder;