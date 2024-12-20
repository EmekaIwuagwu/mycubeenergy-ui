import React, { useState, useEffect } from 'react';
import styles from './Sidebar.module.css'; // Import CSS Module
import logo from '../Assets/logo.png';
import { IoHomeOutline } from "react-icons/io5";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname); // Update active tab on location change
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className={styles.sidebarContainer}>
      <Link to='/'>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </Link>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <Link
            to="/admin_dashboard"
            className={`${styles.menuLink} ${activeTab === "/dashboard" ? styles.active : ""}`}
            onClick={() => handleTabClick("/dashboard")}
          >
            <IoHomeOutline className={styles.icon} />Dashboard
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/admin_order"
            className={`${styles.menuLink} ${activeTab === "/admin_order" ? styles.active : ""}`}
            onClick={() => handleTabClick("/admin_order")}
          >
            <FaChartLine className={styles.icon} />Order
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/admin_billing_setup"
            className={`${styles.menuLink} ${activeTab === "/admin_billing_setup" ? styles.active : ""}`}
            onClick={() => handleTabClick("/admin_billing_setup")}
          >
            <FaCircleChevronDown className={styles.icon} />Billing Setup
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/user_manager"
            className={`${styles.menuLink} ${activeTab === "/user_manager" ? styles.active : ""}`}
            onClick={() => handleTabClick("/user_manager")}
          >
            <FaCircleChevronDown className={styles.icon} />User Manager
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link
            to="/admin_manager"
            className={`${styles.menuLink} ${activeTab === "/admin_manager" ? styles.active : ""}`}
            onClick={() => handleTabClick("/admin_manager")}
          >
            <FaCircleChevronDown className={styles.icon} />Admin Management
          </Link>
        </li>
      </ul>
      <ul className={styles.bottomList}>
        <li className={styles.bottomItem}>
          <Link
            to="/admin_settings"
            className={`${styles.bottomLink} ${activeTab === "/settings" ? styles.active : ""}`}
            onClick={() => handleTabClick("/settings")}
          >
            <CiSettings className={styles.icon} />Settings
          </Link>
        </li>
        <li className={styles.bottomItem}>
          <Link
            to="/admin"
            className={`${styles.bottomLink} ${activeTab === "/admin_logout" ? styles.active : ""}`}
            onClick={() => handleTabClick("/admin_login")}
          >
            <MdOutlinePowerSettingsNew className={styles.icon} />Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;