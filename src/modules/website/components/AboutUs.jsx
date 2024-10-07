import React, { useState } from "react";

const AboutUs = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <section className="font-tt-commons bg-white pt-12 sm:pt-44 pb-16 mx-4 sm:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-5xl">
        {/* Card 1 */}
        <div
          className={`relative w-full h-[400px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
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
            <h2 className="mt-4 text-xl font-bold">
              Why we Built Mycubeenergy
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-xl font-bold">Why we Built Mycubeenergy</h2>
            <p>
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
          className={`relative w-full h-[400px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
            flippedCards[1] ? "rotate-y-180" : ""
          }`}
          onClick={() => handleFlip(1)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col p-4 bg-black rounded-[50px] backface-hidden">
            <img
              src="/assets/icons/support_agent.png"
              alt="Card 2"
              className="w-32 h-32 rounded-t-xl"
            />
            <h2 className="mt-4 text-xl font-bold">
              How our Services are distributed
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-xl font-bold">
              How our Services are distributed
            </h2>
            <p>
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
          className={`relative w-full h-[400px] bg-black text-white cursor-pointer rounded-[50px] transform-style-3d transition-transform duration-700 ${
            flippedCards[2] ? "rotate-y-180" : ""
          }`}
          onClick={() => handleFlip(2)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 flex flex-col p-4 bg-black rounded-[50px] backface-hidden">
            <img
              src="/assets/icons/communities.png"
              alt="Card 3"
              className="w-32 h-32 rounded-t-xl"
            />
            <h2 className="mt-4 text-xl font-bold">our Community</h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-xl font-bold">our Community</h2>
            <p>
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
