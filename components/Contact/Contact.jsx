import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("query_email", "test_email", form.current, "rPVlmRtn45wWuAQVP").then(
      (result) => {
        alert("Email sent! Thank you for your query! We'll get back to you ASAP!");
      },
      (error) => {
        alert(
          `Uh oh! Something went wrong! Try again later (error code for nerds: ${error.text})`
        );
      }
    );
  };

  return (
    <div className={styles.container}>
      <p>Looking to book?</p>
      <h1>Get in touch:</h1>

      <div className={styles.formContainer}>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="user_name" placeholder="Name"></input>
          <label>Email:</label>
          <input type="email" name="user_email" placeholder="Email"></input>
          <label>Mobile:</label>
          <input type="mobile" name="user_mobile" placeholder="Mobile"></input>
          <label>Location:</label>
          <input type="location" name="user_location" placeholder="Location"></input>
          <label>Type of Event:</label>
          <select type="event-type" name="user_event-type">
            <option value="Nothing">None</option>
            <option value="a Party">Parties</option>
            <option value="a Corporate event">Corporate</option>
            <option value="a Wedding">Wedding</option>
            <option value="a Christening">Christening</option>
            <option value="Giggles on Wheels">Giggles on Wheels</option>
          </select>
          <label>Preferred contact method:</label>
          <select type="contact-method" name="user_contact-method">
            <option value="mobile">Mobile</option>
            <option value="email">Email</option>
          </select>
          <label>Query:</label>
          <textarea name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
