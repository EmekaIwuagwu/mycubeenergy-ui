import React from "react";

const WhatWeBuild = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold mb-8 text-custom-black">
          What We Have Been Building
        </h2>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1: Smart Power Systems */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Smart Power Systems</h3>
            <p className="text-gray-700 mb-4">
              Register and get access to our systems.
            </p>
          </div>

          {/* Item 2: Custom Inverters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Custom Inverters</h3>
            <p className="text-gray-700 mb-4">
              Register and get access to our systems.
            </p>
          </div>

          {/* Item 3: Energy Channels */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Energy Channels</h3>
            <p className="text-gray-700 mb-4">
              Register and get access to our systems.
            </p>
          </div>

          {/* Item 4: Self-Service Meters */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Self-Service Meters</h3>
            <p className="text-gray-700 mb-4">
              Register and get access to our systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
