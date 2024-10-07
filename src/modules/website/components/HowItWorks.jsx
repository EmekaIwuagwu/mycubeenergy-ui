import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold mb-4 text-custom-black">
          How It Works
        </h2>
        {/* Description */}
        <p className="mb-8 text-gray-700">
          We dream of a world where 1 billion African homes would have access to electricity at very low cost, while maintaining constant supply.
        </p>

        {/* Action Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Register */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Register</h3>
            <p>Register and get access to our systems.</p>
          </div>

          {/* Step 2: Connect */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p>Connect to our reliable energy sources.</p>
          </div>

          {/* Step 3: Save */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Save</h3>
            <p>Save on energy costs and enjoy uninterrupted supply.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
