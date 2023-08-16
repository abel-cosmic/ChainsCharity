const Banner = () => {
  return (
    <section className="banner bg-no-repeat ">
      <div className="flex flex-col gap-5 lg:gap-10 px-10 lg:px-40 pt-60 pb-40 text-white">
        <p className="text-xl lg:text-5xl">Welcome to Chains Charity</p>
        <p className="text-lg lg:text-xl">
          Join the Chains society and help us break the cycle of poverty!
        </p>
        <input
          type="submit"
          value="Doante Now"
          className="bg-primary cursor-pointer bg-opacity-90 w-fit text-white px-28 py-4 my-8 rounded text-xl font-semibold hover:bg-opacity-100 max-md:self-start max-lg:text-sm"
        />
      </div>
    </section>
  );
};

export default Banner;
