import React from "react";

import styles from "./Navbar.module.css";
import logo from "../images/white.jpg";

import { HashRouter, Route, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation();
  return (
    <div className={styles.navigation}>
      <NavLink exact activeClassName={styles.active} to="/" className={styles["logo-image"]}>
        <img src={logo} alt="logo image" />
      </NavLink>
      <div className={styles["navigation-sub"]}>
        <NavLink exact activeClassName={styles.active} to="/" className={styles.item}>
          HOME
        </NavLink>
        <NavLink activeClassName={styles.active} to="/about" className={styles.item}>
          ABOUT
        </NavLink>
        <NavLink activeClassName={styles.active} to="/projects" className={styles.item}>
          PROJECTS
        </NavLink>
        <NavLink activeClassName={styles.active} to="/contact" className={styles.item}>
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
