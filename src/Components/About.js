import React from "react";
import shared from "./Shared.module.css";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <div className={`${styles.about}`}>
      <div className={`${shared.heading} ${styles.heading}`}>
        <h1>ABOUT</h1>
      </div>
      <div className={styles["profile-picture"]}>
        <img src="../Images/profile-pic.jpg" />
      </div>
      <div className={styles.description}>
        <p className={styles["description-text"]}>
          I have a serious passion for web design and development, and creating
          efficient, beautiful user experiences.
        </p>
      </div>
      <section className={styles['main-section']}>
        <div className={styles.tab}>
          <div className={`${styles.section} ${styles["heading-section"]}`}>
            <h2>Education</h2>
          </div>
          <div className={`${styles.section} ${styles["items-section"]}`}>
            <ul className={styles.items}>
              <li>OntarioTech University, Oshawa</li>
              <li>2017 - 2021</li>
              <li>B.Eng(Hons) Software Engineering</li>
              <li>Final GPA: 3.67 out of 4.3</li>
            </ul>
          </div>
        </div>
        <div className={styles.tab}>
          <div className={`${styles.section} ${styles["heading-section"]}`}>
            <h2>Skills</h2>
          </div>
          <div className={`${styles.section} ${styles["items-section"]}`}>
            <ul className={styles.items}>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className={styles.tab}>
          <div className={`${styles.section} ${styles["heading-section"]}`}>
            <h2>Awards</h2>
          </div>
          <div className={`${styles.section} ${styles["items-section"]}`}>
            <ul className={styles.items}>
              <li>President's List</li>
              <li>Dean's List</li>
            </ul>
          </div>
        </div>
        <div className={styles.tab}>
          <div className={`${styles.section} ${styles["heading-section"]}`}>
            <h2>Hobbies</h2>
          </div>
          <div className={`${styles.section} ${styles["items-section"]}`}>
            <ul className={styles.items}>
              <li>Health and Fitnees</li>
              <li>Swimming</li>
              <li>Boxing</li>
              <li>Reading</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
