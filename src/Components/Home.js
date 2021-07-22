import React from "react";
import shared from "./Shared.module.css";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div className={`${styles.home} ${shared["container-div"]}`}>
      <p className={styles["intro-text"]}>
        Hello, I'm
        <strong className={styles.highlighted}> Izien Iremiren</strong>.
      </p>
      <p className={styles["intro-text"]}>I'm a full-stack web developer.</p>
      <NavLink to="/projects" className={styles.projectsLink}>
        Check out my projects
      </NavLink>
    </div>
  );
};
  
export default Home;
