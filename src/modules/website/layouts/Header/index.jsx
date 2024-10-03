import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-10 pt-10 absolute top-0 left-0 w-full flex gap-20 items-center">
      <img src="/assets/logos/logo.png" alt="Company Logo" />
      <nav className="flex justify-between text-black text-base w-full">
        <ul className="flex space-x-4">
          <li><Link to="#services" className=" bg-white/50 px-5 py-1 rounded-3xl">Services</Link></li>
          <li><Link to="#about" className=" bg-white/50 px-5 py-1 rounded-3xl">About</Link></li>
        </ul>
        <ul className="flex space-x-4">
          <li><Link to="/signin" className=" bg-white/50 px-5 py-1 rounded-3xl">Login</Link></li>
          <li><Link to="/signup" className=" bg-white px-5 py-1 rounded-3xl">Sign up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;