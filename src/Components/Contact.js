import React from "react";
import shared from "./Shared.module.css";
import styles from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={shared["container-div"]}>
      <div className={shared.heading}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles["contact-content"]}>
        <p className={styles.subheading}>Let's make something great!</p>
        <form className={styles["contact-form"]}>
          <input
            className={styles["contact-input"]}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles["contact-input"]}
            type="email"
            placeholder="Enter email"
          />
          <textarea
            className={styles["contact-input"]}
            placeholder="Your Message"
          />
          <button className={styles.submit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
