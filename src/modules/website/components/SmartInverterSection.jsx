import React, { useState } from "react";

const SmartInverterSection = () => {
  // State to manage the currently expanded card
  const [expandedCard, setExpandedCard] = useState("card1");

  // Function to toggle the expansion of the card
  const toggleExpand = (card) => {
    if (expandedCard === card) {
      setExpandedCard(null); // Collapse the card if it's already expanded
    } else {
      setExpandedCard(card); // Expand the clicked card and collapse others
    }
  };

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-6xl font-bold mb-16 text-white capitalize">
          200 African{" "}
          <span className="text-deep-gray">Homes Now have access</span> to
          affordable electricity
        </h2>

        {/* Inverter Details */}
        <div className="flex overflow-x-auto space-x-4 min-h-[500px] scrollbar-hide scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
          {/* Card 1 */}
          <div
            className={`${
              expandedCard === "card1" ? "min-w-[350px]" : "min-w-[200px]"
            } border border-white bg-cover bg-no-repeat bg-center rounded-3xl px-4 pt-10 relative transition-all duration-500 flex flex-col justify-between`}
            style={{
              backgroundImage: "url('/assets/Images/smart-inverter-1.png')",
            }}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => toggleExpand("card1")}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  expandedCard === "card1" ? "bg-transparent" : "bg-white"
                }`}
              >
                <img
                  src="/assets/icons/compress-arrow.svg"
                  alt="arrow"
                  className={` w-6 h-6 ${
                    expandedCard === "card1" ? "" : "invert"
                  }`}
                />
              </button>
            </div>
            <div>
              {expandedCard === "card1" && (
                <div className="border border-white rounded-3xl px-3 w-fit">
                  <h3 className="text-2xl mb-2 font-light">Smart Inverter</h3>
                </div>
              )}
            </div>
            <div className="pb-16">
              <p
                className={`mb-4 ${
                  expandedCard === "card1" ? "text-7xl" : "text-3xl"
                } font-bold`}
              >
                Jos, Nigeria
              </p>
              <p className="text-base">
                Over 20 inverter systems installed in Jos, Nigeria across major
                local government areas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`${
              expandedCard === "card2" ? "min-w-[350px]" : "min-w-[200px]"
            } border border-white bg-cover bg-no-repeat bg-center rounded-3xl px-4 pt-10 relative transition-all duration-500 flex flex-col justify-between`}
            style={{
              backgroundImage: "url('/assets/Images/smart-inverter-2.png')",
            }}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => toggleExpand("card2")}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  expandedCard === "card2" ? "bg-transparent" : "bg-white"
                }`}
              >
                <img
                  src="/assets/icons/compress-arrow.svg"
                  alt="arrow"
                  className={` w-6 h-6 ${
                    expandedCard === "card2" ? "" : "invert"
                  }`}
                />
              </button>
            </div>
            <div>
              {expandedCard === "card2" && (
                <div className="border border-white rounded-3xl px-3 w-fit">
                  <h3 className="text-2xl mb-2 font-light">Smart Inverter</h3>
                </div>
              )}
            </div>
            <div className="pb-16">
              <p
                className={`mb-4 ${
                  expandedCard === "card2" ? "text-7xl" : "text-3xl"
                } font-bold`}
              >
                Jos, Nigeria
              </p>
              <p className="text-base">
                Over 20 inverter systems installed in Jos, Nigeria across major
                local government areas.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`${
              expandedCard === "card3" ? "min-w-[350px]" : "min-w-[200px]"
            } border border-white bg-cover bg-no-repeat bg-center rounded-3xl px-4 pt-10 relative transition-all duration-500 flex flex-col justify-between`}
            style={{
              backgroundImage: "url('/assets/Images/smart-inverter-3.png')",
            }}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => toggleExpand("card3")}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  expandedCard === "card3" ? "bg-transparent" : "bg-white"
                }`}
              >
                <img
                  src="/assets/icons/compress-arrow.svg"
                  alt="arrow"
                  className={` w-6 h-6 ${
                    expandedCard === "card3" ? "" : "invert"
                  }`}
                />
              </button>
            </div>
            <div>
              {expandedCard === "card3" && (
                <div className="border border-white rounded-3xl px-3 w-fit">
                  <h3 className="text-2xl mb-2 font-light">Smart Inverter</h3>
                </div>
              )}
            </div>
            <div className="pb-16">
              <p
                className={`mb-4 ${
                  expandedCard === "card3" ? "text-7xl" : "text-3xl"
                } font-bold`}
              >
                Jos, Nigeria
              </p>
              <p className="text-base">
                Over 20 inverter systems installed in Jos, Nigeria across major
                local government areas.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className={`${
              expandedCard === "card4" ? "min-w-[350px]" : "min-w-[200px]"
            } border border-white bg-cover bg-no-repeat bg-center rounded-3xl px-4 pt-10 relative transition-all duration-500 flex flex-col justify-between`}
            style={{
              backgroundImage: "url('/assets/Images/smart-inverter-4.png')",
            }}
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => toggleExpand("card4")}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  expandedCard === "card4" ? "bg-transparent" : "bg-white"
                }`}
              >
                <img
                  src="/assets/icons/compress-arrow.svg"
                  alt="arrow"
                  className={` w-6 h-6 ${
                    expandedCard === "card4" ? "" : "invert"
                  }`}
                />
              </button>
            </div>
            <div>
              {expandedCard === "card4" && (
                <div className="border border-white rounded-3xl px-3 w-fit">
                  <h3 className="text-2xl mb-2 font-light">Smart Inverter</h3>
                </div>
              )}
            </div>
            <div className="pb-16">
              <p
                className={`mb-4 ${
                  expandedCard === "card4" ? "text-7xl" : "text-3xl"
                } font-bold`}
              >
                Jos, Nigeria
              </p>
              <p className="text-base">
                Over 20 inverter systems installed in Jos, Nigeria across major
                local government areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInverterSection;
