import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-7xl font-bold text-center text-deep-gray mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(0)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                How does MyCubeEnergy’s pay-as-you-go model work?
              </h3>
              <span>{openIndex === 0 ? '-' : '+'}</span>
            </div>
            {openIndex === 0 && (
              <p className="mt-4 text-gray-600">
                Welcome to MyCubeEnergy LLC, an innovative energy company registered in Kentucky, USA, with operations in Nigeria, dedicated to providing reliable, affordable, and sustainable electricity. Founded to revolutionize the energy landscape, MyCubeEnergy is on a mission to deliver 24/7 electricity to homes and businesses across Nigeria at the most competitive rates. We believe that access to electricity is a fundamental right, not a luxury.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(1)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                What makes MyCubeEnergy different from traditional electricity providers?
              </h3>
              <span>{openIndex === 1 ? '-' : '+'}</span>
            </div>
            {openIndex === 1 && (
              <p className="mt-4 text-gray-600">
                MyCubeEnergy offers a more flexible, affordable, and sustainable solution through its pay-as-you-go model, ensuring 24/7 electricity without the limitations of traditional billing cycles or supply interruptions.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(2)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                How do I monitor my electricity usage with MyCubeEnergy?
              </h3>
              <span>{openIndex === 2 ? '-' : '+'}</span>
            </div>
            {openIndex === 2 && (
              <p className="mt-4 text-gray-600">
                You can monitor your electricity usage via our smart meter app, which gives real-time data on your consumption, balance, and remaining credits.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(3)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Is MyCubeEnergy available in my area?
              </h3>
              <span>{openIndex === 3 ? '-' : '+'}</span>
            </div>
            {openIndex === 3 && (
              <p className="mt-4 text-gray-600">
                Currently, MyCubeEnergy operates in select areas across Nigeria. Visit our website or contact customer support to check availability in your region.
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(4)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                What happens if I run out of electricity credits?
              </h3>
              <span>{openIndex === 4 ? '-' : '+'}</span>
            </div>
            {openIndex === 4 && (
              <p className="mt-4 text-gray-600">
                When your electricity credits run out, your power will be temporarily suspended until you recharge. You can easily top up via our mobile app, online platform, or through our authorized agents.
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(5)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                How do I install a MyCubeEnergy smart meter?
              </h3>
              <span>{openIndex === 5 ? '-' : '+'}</span>
            </div>
            {openIndex === 5 && (
              <p className="mt-4 text-gray-600">
                Our professional installation team will set up your smart meter at no extra cost. Once installed, the smart meter will immediately start tracking your usage and provide you with data via our app.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
