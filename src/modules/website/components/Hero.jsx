import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 pt-12 text-white min-h-dvh font-tt-commons sm:pt-44 pb-28"
      style={{
        backgroundImage: "url(/assets/Images/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
      <h1 className="mb-4 text-4xl font-bold text-center sm:text-6xl">
        Uninterrupted Power <br /> Unbeatable Prices
      </h1>
      <p className="mb-6 text-base font-normal sm:text-2xl">Energizing Africa's Future!</p>
      <div className="flex items-center justify-between p-2 border bg-custom-gray/50 border-custom-green rounded-[60px] overflow-hidden w-full  max-w-96 mt-12 sm:mt-32">
        <input
          type="text"
          placeholder="Your email"
          className="p-2 bg-transparent border-none outline-none"
        />
        <button className="py-3 text-black bg-white cursor-pointer px-7 rounded-3xl text-nowrap">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;