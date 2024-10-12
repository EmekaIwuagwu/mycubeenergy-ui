import React from "react";
import styles from '../components/Hero.module.css'
const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center font-tt-commons text-white pt-12 sm:pt-44 pb-16 sm:pb-28 px-4"
      style={{
        backgroundImage: "url(/assets/Images/hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Heading */}
      <h1 className={`${styles.heroHeading} text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center leading-snug sm:leading-tight`}>
        Uninterrupted Power <br /> Unbeatable Prices
      </h1>

      {/* Subtext */}
      <p className={`${styles.heroSubtext} text-sm sm:text-xl lg:text-2xl font-normal mb-6 sm:mb-8 text-center`}>
        Energizing Africa's Future!
      </p>

      {/* Email Signup Form */}
      <div className="flex flex-col sm:flex-row items-center justify-center p-2 border bg-custom-gray/50 border-custom-green rounded-[60px] overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg mt-10 sm:mt-16">
        <input
          type="text"
          placeholder="Your email"
          className={`${styles.emailInput} p-3 w-full sm:w-auto border-none outline-none bg-transparent text-sm sm:text-base`}
        />
        <button className={`${styles.signupButton} py-3 px-7 bg-white text-black cursor-pointer rounded-3xl mt-3 sm:mt-0 sm:ml-4`}>
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Hero;
