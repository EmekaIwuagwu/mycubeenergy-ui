import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-dvh flex flex-col justify-center items-center font-tt-commons text-white pt-12 sm:pt-44 pb-16 px-4"
      style={{
        backgroundImage: "url(/assets/Images/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
        Uninterrupted Power <br /> Unbeatable Prices
      </h1>
      <p className="text-base sm:text-2xl font-normal mb-6">Energizing Africa's Future!</p>
      <div className="flex items-center justify-between p-2 border bg-custom-gray/50 border-custom-green rounded-[60px] overflow-hidden w-full  max-w-96 mt-12 sm:mt-32">
        <input
          type="text"
          placeholder="Your email"
          className="p-2 border-none outline-none bg-transparent"
        />
        <button className="py-3 px-7 bg-white text-black cursor-pointer rounded-3xl">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;
