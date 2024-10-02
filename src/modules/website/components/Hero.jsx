import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-dvh flex flex-col justify-center items-center font-tt-commons text-white"
      style={{
        backgroundImage: "url(/assets/images/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-center">
        Uninterrupted Power <br /> Unbeatable Prices
      </h1>
      <p className="text-base sm:text-2xl font-normal mb-6">Energizing Africa's Future!</p>
      <div className="flex items-center p-1.5 border bg-custom-gray/50 border-custom-green rounded-[60px] overflow-hidden max-w-80 mt-12 sm:mt-40">
        <input
          type="text"
          placeholder="Your email"
          className="flex-1 p-2 border-none outline-none bg-transparent"
        />
        <button className="py-2 px-5 bg-white text-black cursor-pointer rounded-3xl">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;
