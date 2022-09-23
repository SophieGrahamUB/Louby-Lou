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
        window.location.reload();
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            required
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Email"
            required
          ></input>
          <label htmlFor="mobile">Mobile:</label>
          <input
            required
            type="mobile"
            id="mobile"
            name="user_mobile"
            placeholder="Mobile"
          ></input>
          <label htmlFor="location">Location:</label>
          <input
            required
            type="location"
            id="location"
            name="user_location"
            placeholder="Location"
          ></input>
          <label htmlFor="event">Type of Event:</label>
          <select type="event-type" id="event" name="user_event-type">
            <option value="Nothing">None</option>
            <option value="a Party">Parties</option>
            <option value="a Corporate event">Corporate</option>
            <option value="a Wedding">Wedding</option>
            <option value="a Christening">Christening</option>
            <option value="Giggles on Wheels">Giggles on Wheels</option>
          </select>
          <label htmlFor="method">Preferred contact method:</label>
          <select type="contact-method" id="method" name="user_contact-method">
            <option value="mobile">Mobile</option>
            <option value="email">Email</option>
          </select>
          <label htmlFor="query">Query:</label>
          <textarea name="message" id="query" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
