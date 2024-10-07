import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logos/logo.png"
              alt="MyCubeEnergy Logo"
              className="invert"
            />
          </div>
          {/* Links */}
          <ul className="flex flex-col lg:flex-row items-center gap-4 text-sm text-gray-600">
            <li>
              <a href="/privacy-policy" className="hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-gray-600 before:mx-2"></li>
            <li>
              <a href="/terms-of-use" className="hover:text-gray-800">
                Terms of Use
              </a>
            </li>
            <li className="before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-gray-600 before:mx-2"></li>
            {/* Copyright */}
            <li className="text-gray-600 text-sm">
              © MyCubeEnergy 2024, All Rights Reserved
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
