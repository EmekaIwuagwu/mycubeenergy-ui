import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="px-10 pt-10 absolute top-0 left-0 w-full flex gap-20 items-center">
      {/* Conditionally set the logo to be black for non-home pages */}
      <Link to="/">
        <img
          src="/assets/logos/logo.png"
          alt="Company Logo"
          className={isHomePage ? "" : "invert"} // You can use a filter CSS class to make it black
        />
      </Link>
      <nav className="flex justify-between text-custom-black text-base w-full">
        <ul className="flex items-center space-x-4">
          {/* Only show 'Home' link on non-home pages */}
          {!isHomePage && (
            <li>
              <Link
                to="/"
                className={`px-5 py-1.5 rounded-3xl leading-none ${
                  !isHomePage ? "bg-light-green" : "bg-white/50"
                }`}
              >
                Home
              </Link>
            </li>
          )}
          <li>
            <Link to="/services"  className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-custom-black/5" : "bg-white/50"
              }`}>
              Services
            </Link>
          </li>

          {/* Only show the input field on the home page */}
          {isHomePage && (
            <div className="flex items-center justify-between p-1 bg-white/50 rounded-[60px] overflow-hidden w-full min-w-64">
              <input
                type="text"
                placeholder="Find our nearest location"
                className="py-1 px-2 border-none text-black outline-none bg-transparent placeholder:text-custom-black"
              />
              <div className="bg-white rounded-full p-1.5">
                <img src="/assets/icons/search.svg" alt="Search Icon" />
              </div>
            </div>
          )}

          <li>
            <Link to="/about" 
             className={`px-5 py-1.5 rounded-3xl  leading-none ${
              !isHomePage ? "bg-deep-green text-mid-green" : "bg-white/50"
            }`}>
              About
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/signin"
              className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-light-green" : "bg-white/50"
              }`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup"  className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-custom-orange" : "bg-white/50"
              }`}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
