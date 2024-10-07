import React from "react";
import { Hero, HowItWorks, SmartInverterSection, WhatWeBuild } from "../../components";
import { Header, Footer } from "../../layouts";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeBuild />
      <SmartInverterSection />
      <Footer />
    </main>
  );
};

export default Home;
