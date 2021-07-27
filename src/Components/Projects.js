import React from "react";

import shared from "./Shared.module.css";
import styles from "./Projects.module.css";

import capstone from "../images/capstone.png"
import healthApp from "../images/health-app.PNG";
import ticTacToe from "../images/ticTacToe.PNG";
import cookAtHome from "../images/cook-at-home";

import Project from "./Project";

const Projects = (props) => {
  return (
    <div className={`${styles.projects} ${shared["container-div"]}`}>
      <div className={`${shared.heading} ${styles.heading}`}>
        <h1>PROJECTS</h1>
      </div>
      <div className={styles['projects-list']}>
        <Project title="Health App - Web App" link="https://cloud-health-app.herokuapp.com/" text="Visit App!" image={healthApp}/>
        <Project title="Tic-Tac-Toe Game - Web App" link="https://test-tic-tac-toe-game.herokuapp.com/" text="Visit Game!" image={ticTacToe}/>
        <Project title="IoT Fire Prediction System - Distributed System" link="https://github.com/ICUBE321/Fire-Detection-System.git" text="Visit project repo!" image={capstone}/>
        <Project title=" Meal Planner - Mobile App" link="https://github.com/ICUBE321/meal-planner.git" text="Visit app repo!" image={cookAtHome}/>
      </div>
    </div>
  );
};

export default Projects;
