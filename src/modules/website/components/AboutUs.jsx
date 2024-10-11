import React, { useState } from "react";

const AboutUs = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <section className="pb-16 mx-4 bg-white font-tt-commons pt-44 sm:mx-10">
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {/* Card 1 */}
        <div
          className={`relative w-full h-[480px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
            flippedCards[0] ? "rotate-y-180" : ""
          }`}
          onClick={() => handleFlip(0)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col py-10 px-8 bg-black rounded-[50px] backface-hidden">
            <img
              src="/assets/icons/roofing.png"
              alt="Card 1"
              className="w-32 h-32 rounded-t-xl"
            />
            <h2 className="mt-4 text-5xl font-bold md:text-7xl">
              Why we <span className="text-deep-gray">Built Mycubeenergy</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-[40px] font-bold  leading-tight">Why we <span className="text-deep-gray">Built Mycubeenergy</span></h2>
            <p className="mt-8 text-justify">
              Welcome to MyCubeEnergy LLC, an innovative energy company
              registered in Kentucky, USA, with operations in Nigeria, dedicated
              to providing reliable, affordable, and sustainable electricity.
              Founded to revolutionize the energy landscape, MyCubeEnergy is on
              a mission to deliver 24/7 electricity to homes and businesses
              across Nigeria at the most competitive rates. We believe that
              access to electricity is a fundamental right, not a luxury.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`relative w-full h-[480px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
            flippedCards[1] ? "rotate-y-180" : ""
          }`}
          onClick={() => handleFlip(1)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col py-10 px-8 bg-black rounded-[50px] backface-hidden">
            <img
              src="/assets/icons/support_agent.png"
              alt="Card 2"
              className="w-32 h-32 rounded-t-xl"
            />
           <h2 className="mt-4 text-5xl font-bold md:text-7xl">
              How our{" "}
              <span className="text-deep-gray"> Services are Distributed</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
          <h2 className="text-[40px] font-bold leading-tight">
              How our{" "}
              <span className="text-deep-gray"> Services are Distributed</span>
            </h2>
            <p className="mt-8 text-justify">
              Welcome to MyCubeEnergy LLC, an innovative energy company
              registered in Kentucky, USA, with operations in Nigeria, dedicated
              to providing reliable, affordable, and sustainable electricity.
              Founded to revolutionize the energy landscape, MyCubeEnergy is on
              a mission to deliver 24/7 electricity to homes and businesses
              across Nigeria at the most competitive rates. We believe that
              access to electricity is a fundamental right, not a luxury.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`relative w-full h-[480px] bg-black text-white cursor-pointer rounded-[50px] transform-style-3d transition-transform duration-700 ${
            flippedCards[2] ? "rotate-y-180" : ""
          }`}
          onClick={() => handleFlip(2)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col py-10 px-8 bg-black rounded-[50px] backface-hidden">
            <img
              src="/assets/icons/communities.png"
              alt="Card 3"
              className="w-32 h-32 rounded-t-xl"
            />
           <h2 className="mt-4 text-5xl font-bold md:text-7xl">
              Our <span className="text-deep-gray">Community</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
          <h2 className="text-[40px] font-bold">
              Our <span className="leading-tight text-deep-gray"> Community </span>
            </h2>
            <p className="mt-8 text-justify">
              Welcome to MyCubeEnergy LLC, an innovative energy company
              registered in Kentucky, USA, with operations in Nigeria, dedicated
              to providing reliable, affordable, and sustainable electricity.
              Founded to revolutionize the energy landscape, MyCubeEnergy is on
              a mission to deliver 24/7 electricity to homes and businesses
              across Nigeria at the most competitive rates. We believe that
              access to electricity is a fundamental right, not a luxury.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
