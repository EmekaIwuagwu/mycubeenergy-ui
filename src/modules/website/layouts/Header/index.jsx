import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 z-50 flex items-center justify-between w-full gap-20 px-4 pt-10 md:px-10">
      <div className="relative z-50 flex items-center justify-between w-full lg:w-fit">
        <Link to="/">
          <img
            src="/assets/logos/logo.png"
            alt="Company Logo"
            className={isHomePage ? "" : "invert"}
          />
        </Link>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>
      <nav className="items-center justify-between hidden w-full text-base lg:flex text-custom-black">
        <ul className="flex items-center space-x-4">
          {!isHomePage && (
            <li>
              <Link
                to="/"
                className={`px-5 py-1.5 rounded-3xl leading-none ${
                  !isHomePage ? "bg-custom-black/5" : "bg-white/50"
                }`}
              >
                Home
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/services"
              className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-custom-black/5" : "bg-white/50"
              }`}
            >
              Services
            </Link>
          </li>
          {isHomePage && (
            <div className="flex items-center justify-between p-1 bg-white/50 rounded-[60px] overflow-hidden w-full min-w-64">
              <input
                type="text"
                placeholder="Find our nearest location"
                className="px-2 py-1 text-black bg-transparent border-none outline-none placeholder:text-custom-black"
              />
              <div className="bg-white rounded-full p-1.5">
                <img src="/assets/icons/search.svg" alt="Search Icon" />
              </div>
            </div>
          )}

          <li>
            <Link
              to="/about"
              className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-deep-green text-mid-green" : "bg-white/50"
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/login"
              className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-light-green" : "bg-white/50"
              }`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className={`px-5 py-1.5 rounded-3xl  leading-none ${
                !isHomePage ? "bg-custom-orange" : "bg-white/50"
              }`}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          className={`absolute top-0 left-0 right-0 z-10 flex flex-col items-center p-4 pt-20 transition-all duration-500 bg-white shadow-lg lg:hidden ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-4 text-center">
            {!isHomePage && (
              <li>
                <Link
                  to="/"
                  className="block w-full px-5 py-2 bg-transparent rounded-3xl hover:bg-light-green"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/services"
                className="block w-full px-5 py-2 bg-transparent rounded-3xl hover:bg-custom-black/5"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block w-full px-5 py-2 bg-transparent rounded-3xl hover:bg-custom-black/5"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block w-full px-5 py-2 bg-transparent rounded-3xl hover:bg-custom-black/5"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </li>

            {/* The Sign up button retains its background color */}
            <li>
              <Link
                to="/signup"
                className="block w-full px-5 py-2 rounded-3xl bg-custom-orange"
                onClick={toggleMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;