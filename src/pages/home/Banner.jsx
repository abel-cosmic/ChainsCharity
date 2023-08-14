const Banner = () => {
  return (
    <section className="relative">
      <img src="src/assets/images/banner.png" className="w-full" alt="banner" />
      <div className="absolute top-72 left-40 text-white">
        <p className="text-7xl">Welcome to Chains Charity</p>
        <p className="mt-12 text-2xl">
          Join the Chains society and help us break the cycle of poverty!
        </p>
        <input
          type="submit"
          value="Doante Now"
          className="bg-primary cursor-pointer bg-opacity-90 text-white px-28 py-4 my-10 rounded text-3xl font-semibold hover:bg-opacity-100 max-md:self-start max-lg:text-sm"
        />
      </div>
    </section>
  );
  //  <section class="banner">
  //     <img src="img/banner.png" alt="mario club welcome banner">
  //     <div class="welcome">
  //         <h2>Welcome to <br><span>Mario CLub</span></h2>
  //     </div>
  // </section>
};

export default Banner;
