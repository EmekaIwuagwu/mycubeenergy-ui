import React, { useState } from "react";

const AboutUs = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    const updatedFlippedCards = [...flippedCards];
    updatedFlippedCards[index] = !updatedFlippedCards[index];
    setFlippedCards(updatedFlippedCards);
  };

  return (
    <section className="px-4 pb-16 bg-white font-tt-commons pt-44 sm:px-10">
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {/* Card 1 */}
        <div
          className={`relative w-full h-[520px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
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
             <h2 className="mt-4 text-3xl font-bold text-center text-white sm:text-5xl">
              Why we <span className="text-deep-gray">Built Mycubeenergy</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-[40px] text-center font-bold text-deep-gray  leading-tight">
              Why we Built Mycubeenergy
            </h2>
            <p className="mt-8 text-justify">
              We built MyCubeEnergy to empower energy independence and
              efficiency for all. Recognizing the challenges in accessing
              reliable energy, especially in areas with unstable power, we
              designed MyCubeEnergy to offer users full control over their
              energy usage and insights for better consumption habits. By
              integrating smart metering and analytics, MyCubeEnergy helps
              reduce costs, improve sustainability, and promote a greener future
              for everyone.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`relative w-full h-[520px] bg-black text-white rounded-[50px] cursor-pointer transform-style-3d transition-transform duration-700 ${
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
              <h2 className="mt-4 text-3xl font-bold text-center text-white sm:text-5xl">
              How our{" "}
              <span className="text-deep-gray"> Services are Distributed</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-[40px] text-center font-bold leading-tight text-deep-gray">
              How our Services are Distributed
            </h2>
            <p className="mt-8 text-justify">
              MyCubeEnergy's services are delivered through a combination of
              advanced smart metering, a user-friendly mobile app, and cloud
              analytics. Our distributed approach ensures seamless energy
              monitoring, real-time data access, and personalized insights,
              making reliable energy management accessible anywhere, anytime.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`relative w-full h-[520px] bg-black text-white cursor-pointer rounded-[50px] transform-style-3d transition-transform duration-700 ${
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
            <h2 className="mt-4 text-3xl font-bold text-center text-white sm:text-5xl">
              Our <span className="text-deep-gray">Community</span>
            </h2>
          </div>
          {/* Back Side */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:py-10 md:px-12 bg-black rounded-[50px] transform rotate-y-180 backface-hidden">
            <h2 className="text-[40px] text-center font-bold text-deep-gray">
             Community
            </h2>
            <p className="mt-8 text-justify">
              The MyCubeEnergy community is a network of energy-conscious
              individuals dedicated to making sustainable energy accessible for
              all. Together, we share insights, support eco-friendly practices,
              and advocate for smarter energy choices. Through collaboration and
              shared experiences, we aim to create lasting impact by empowering
              individuals and businesses to embrace efficient, reliable, and
              sustainable energy solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
