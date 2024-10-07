import React from "react";

const SmartInverterSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold mb-8 text-custom-black">
          Smart Inverter
        </h2>

        {/* Inverter Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Smart Inverter</h3>
            <p className="text-gray-700 mb-4">Jos, Nigeria</p>
            <p className="text-gray-600">
              Over 20 inverter systems installed in Jos, Nigeria across major local government areas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Smart Inverter</h3>
            <p className="text-gray-700 mb-4">Jos, Nigeria</p>
            <p className="text-gray-600">
              Over 20 inverter systems installed in Jos, Nigeria across major local government areas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">Smart Inverter</h3>
            <p className="text-gray-700 mb-4">Jos, Nigeria</p>
            <p className="text-gray-600">
              Over 20 inverter systems installed in Jos, Nigeria across major local government areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInverterSection;
