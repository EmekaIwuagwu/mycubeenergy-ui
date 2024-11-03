import React from "react";

const WhatWeBuild = () => {
  return (
    <section className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="sm:text-7xl text-4xl font-bold mb-24 text-custom-black max-w-[700px]">
          <span className="text-deep-gray"> What We </span> Have Been Building
        </h2>

        <div className="flex justify-between gap-20">
          <img
            src="/assets/Images/3d-electric-car-building.png"
            alt="What we build image"
            className="hidden md:block"
          />
          {/* Items */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Item 1: Smart Power Systems */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
              <div className="bg-[#F8A052] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">Smart Power Systems</h3>
              <p className="mb-4 text-2xl text-center text-deep-gray">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 2: Custom Inverters */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
            <div className="bg-[#D7D426] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">Custom Inverters</h3>
              <p className="mb-4 text-2xl text-center text-deep-gray">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 3: Energy Channels */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
            <div className="bg-[#579F1C] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">Energy Channels</h3>
              <p className="mb-4 text-2xl text-center text-deep-gray">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 4: Self-Service Meters */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg">
            <div className="py-6 rounded-full bg-custom-orange px-7">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-center">Self-Service Meters</h3>
              <p className="mb-4 text-2xl text-center text-deep-gray">
                Register and get access to our systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
