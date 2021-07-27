import React from "react";

import linkedin from "../images/linkedin-icon.png";
import github from "../images/github-icon.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/izien-iremiren/"
        className={styles["footer-link"]}
      >
        <img src={linkedin} alt="linkedin logo" />
      </a>
      <a href="https://github.com/ICUBE321" className={styles["footer-link"]}>
        <img src={github} alt="github logo" />
      </a>
    </div>
  );
};

export default Footer;
