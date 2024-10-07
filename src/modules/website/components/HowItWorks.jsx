import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-black py-12 px-4 sm:px-6 lg:px-8 rounded-[50px] -mt-10">
      <div className="max-w-6xl mx-auto text-center py-20">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          How It Works
        </h2>
        {/* Description */}
        <p className="mb-8 text-deep-gray w-3/5 mx-auto">
          We dream of a world where 1 billion African homes would have access to
          electricity at very low cost, while maintaining constant supply.
        </p>

        {/* Action Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Register */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-[#DF8E8E]/50 p-2 rounded-full">
              <div className="bg-[#DF8E8E] px-7 py-6 rounded-full w-fit">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
            </div>
            <h3 className="text-3xl font-bold my-2">Register</h3>
            <p>Register and get access to our systems.</p>
          </div>

          {/* Step 2: Connect */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-[#D7D426]/50 p-2 rounded-full">
              <div className="bg-[#D7D426] px-7 py-6 rounded-full w-fit">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
            </div>
            <h3 className="text-3xl font-bold my-2">Connect</h3>
            <p>Connect to our reliable energy sources.</p>
          </div>

          {/* Step 3: Save */}
          <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="bg-[#F8A052]/50 p-2 rounded-full">
              <div className="bg-[#F8A052] px-7 py-6 rounded-full w-fit">
                <img src="/assets/icons/safety_check.svg" alt="safety_check" />
              </div>
            </div>
            <h3 className="text-3xl font-bold my-2">Save</h3>
            <p>Save on energy costs and enjoy uninterrupted supply.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
