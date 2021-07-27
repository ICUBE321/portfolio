import React from "react";

import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <a className={styles["link-box"]} href={props.link}>
        <label className={styles["project-label"]}>{props.title}</label>
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className={styles.image}
        ></div>
        <p className={styles.link}>{props.text}</p>
      </a>
    </div>
  );
};

export default Project;
