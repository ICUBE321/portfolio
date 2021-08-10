import React, { useState } from "react";
import shared from "./Shared.module.css";
import styles from "./Contact.module.css";
import emailjs, { init } from "emailjs-com";
init("user_v9B5gRcVDJoDmGqGthBR6");

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(event);

    const templateParams = {
      from_name: name + " (" + email + ") ",
      to_name: "Izien",
      message: message,
    };

    emailjs.send("portfolio_contact", "template_0wa8itk", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FALIED...", error);
      }
    );

    resetFormInputs();
  };

  const resetFormInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={shared["container-div"]}>
      <div className={shared.heading}>
        <h1>CONTACT</h1>
      </div>
      <div className={styles["contact-content"]}>
        <p className={styles.subheading}>Let's make something great!</p>
        <form className={styles["contact-form"]} onSubmit={submitHandler}>
          <input type="hidden" value="something"/>
          <input
            className={styles["contact-input"]}
            type="text"
            placeholder="Name"
            autoComplete="nope"
            value={name}
            onChange={changeName}
            required
          />
          <input
            className={styles["contact-input"]}
            type="email"
            placeholder="Enter email"
            autoComplete="nope"
            value={email}
            onChange={changeEmail}
            required
          />
          <textarea
            className={styles["contact-input"]}
            placeholder="Your Message"
            value={message}
            onChange={changeMessage}
            required
          />
          <button className={styles.submit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
