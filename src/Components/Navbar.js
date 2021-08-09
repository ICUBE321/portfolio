import React, { useState } from "react";

import styles from "./Navbar.module.css";
import logo from "../images/white.jpg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation();
  const [mobileNavClass, setMobileNavClass] = useState("");

  const openMobileNav = () => {
    if (mobileNavClass === "") {
      setMobileNavClass("open");
    } else {
      setMobileNavClass("");  
    }
  };

  return (
    <div className={`${styles.navigation}`}>
      <NavLink
        exact
        activeClassName={styles.active}
        to="/"
        className={styles["logo-image"]}
      >
        <img src={logo} alt="logo image" />
      </NavLink>
      <a className={`${styles.icon} ${styles[mobileNavClass]}`} onClick={openMobileNav}>
        &#9776;
      </a>
      <div className={styles["navigation-sub"]}>
        <NavLink
          exact
          activeClassName={styles.active}
          to="/"
          className={styles.item}
        >
          HOME
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/about"
          className={styles.item}
        >
          ABOUT
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/projects"
          className={styles.item}
        >
          PROJECTS
        </NavLink>
        <NavLink
          activeClassName={styles.active}
          to="/contact"
          className={styles.item}
        >
          CONTACT
        </NavLink>
      </div>
      <div className={styles.dropdown}>
        <div
          className={`${styles["mobile-nav__sub"]} ${styles[mobileNavClass]}`}
        >
          <NavLink exact to="/" className={styles["mobile-nav__item"]} onClick={openMobileNav}>
            HOME
          </NavLink>
          <NavLink to="/about" className={styles["mobile-nav__item"]} onClick={openMobileNav}>
            ABOUT
          </NavLink>
          <NavLink to="/projects" className={styles["mobile-nav__item"]} onClick={openMobileNav}>
            PROJECTS
          </NavLink>
          <NavLink to="/contact" className={styles["mobile-nav__item"]} onClick={openMobileNav}>
            CONTACT
          </NavLink>
          {/* <div className={`${styles.backdrop}`}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
