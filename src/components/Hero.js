import React from "react";

const Hero = () => {
  return (
    <section className="hero text-white flex-auto w-3/5 flex flex-col pl-20">
      <header className="py-10">
        <span className="logo text-white font-bold leading-none">travel</span>
      </header>

      <div className="hero-body max-w-md w-full mt-56">
        <h1 className="text-4xl mb-5 font-bold leading-tight tracking-normal">
          Get ready for your lifetime journey
        </h1>
        <p className="text-base mb-10 font-semibold leading-normal">
          Collection of the most beautiful places, experiences and unusual
          housings in the world
        </p>
        <button className="outline-none border-none bg-orange-600 text-white font-bold block text-sm py-4 px-20 rounded-lg focus:shadow-outline hover:bg-orange-500">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Hero;
