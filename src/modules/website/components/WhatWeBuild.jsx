import React from "react";

const WhatWeBuild = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="sm:text-7xl text-4xl font-bold mb-24 text-custom-black max-w-[700px]">
          <span className="text-deep-gray"> What We </span> Have Been Building
        </h2>

        <div className="flex gap-20 justify-between">
          <img
            src="/assets/Images/3d-electric-car-building.png"
            alt="What we build image"
            className="hidden md:block"
          />
          {/* Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Item 1: Smart Power Systems */}
            <div className="rounded-lg p-4 flex flex-col justify-center items-center">
              <div className="bg-[#F8A052] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Smart Power Systems</h3>
              <p className="text-deep-gray text-center text-2xl mb-4">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 2: Custom Inverters */}
            <div className="rounded-lg p-4 flex flex-col justify-center items-center">
            <div className="bg-[#D7D426] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Custom Inverters</h3>
              <p className="text-deep-gray text-center text-2xl mb-4">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 3: Energy Channels */}
            <div className="rounded-lg p-4 flex flex-col justify-center items-center">
            <div className="bg-[#579F1C] px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Energy Channels</h3>
              <p className="text-deep-gray text-center text-2xl mb-4">
                Register and get access to our systems.
              </p>
            </div>

            {/* Item 4: Self-Service Meters */}
            <div className="rounded-lg p-4 flex flex-col justify-center items-center">
            <div className="bg-custom-orange px-7 py-6 rounded-full">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Self-Service Meters</h3>
              <p className="text-deep-gray text-center text-2xl mb-4">
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
