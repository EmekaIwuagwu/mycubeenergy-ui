import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../Header/Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [menuActive, setMenuActive] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src="/assets/logos/logo.png"
          alt="Company Logo"
          className={`${styles.logo} ${isHomePage ? "" : styles.invert}`}
        />
      </Link>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <nav className={`${styles.nav} ${menuActive ? "active" : ""}`}>
        <ul className={styles.navList}>
          {!isHomePage && (
            <li>
              <Link to="/" className={`px-5 py-1.5 rounded-3xl leading-none ${!isHomePage ? "bg-light-green" : "bg-white/50"}`}>
                Home
              </Link>
            </li>
          )}
          <li>
            <Link to="/services" className={`px-5 py-1.5 rounded-3xl leading-none ${!isHomePage ? "bg-custom-black/5" : "bg-white/50"}`}>
              Services
            </Link>
          </li>
          {isHomePage && (
            <div className={`${styles.searchContainer} p-1`}>
              <input
                type="text"
                placeholder="Find our nearest location"
                className={`${styles.searchInput}`}
              />
              <div className={styles.searchIcon}>
                <img src="/assets/icons/search.svg" alt="Search Icon" />
              </div>
            </div>
          )}
          <li>
            <Link to="/about" className={`px-5 py-1.5 rounded-3xl leading-none ${!isHomePage ? "bg-deep-green text-mid-green" : "bg-white/50"}`}>
              About
            </Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li>
            <Link to="/login" className={`px-5 py-1.5 rounded-3xl leading-none ${!isHomePage ? "bg-light-green" : "bg-white/50"}`}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className={`px-5 py-1.5 rounded-3xl leading-none ${!isHomePage ? "bg-custom-orange" : "bg-white/50"}`}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
