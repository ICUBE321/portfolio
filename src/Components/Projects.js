import React from "react";
import shared from "./Shared.module.css";
import styles from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div className={`${styles.projects} ${shared["container-div"]}`}>
      <div className={`${shared.heading} ${styles.heading}`}>
        <h1>PROJECTS</h1>
      </div>
      <div className={styles['projects-list']}>
        <div className={styles.project}>
          <label className={styles["project-label"]}>
            Health App - Web App
          </label>
          <a
            className={styles.link}
            href="https://cloud-health-app.herokuapp.com/"
          >
            Visit App!
          </a>
        </div>
        <div className={styles.project}>
          <label className={styles["project-label"]}>
            Tic-Tac-Toe Game - Web App
          </label>
          <a
            className={styles.link}
            href="https://test-tic-tac-toe-game.herokuapp.com/"
          >
            Visit Game!
          </a>
        </div>
        <div className={styles.project}>
          <label className={styles["project-label"]}>
            IoT Fire Prediction System - Distributed System
          </label>
          <a
            className={styles.link}
            href="https://github.com/ICUBE321/Fire-Detection-System.git"
          >
            Visit project repo!
          </a>
        </div>
        <div className={styles.project}>
          <label className={styles["project-label"]}>
            Meal Planner - Mobile App
          </label>
          <a
            className={styles.link}
            href="https://github.com/ICUBE321/meal-planner.git"
          >
            Visit app repo!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
