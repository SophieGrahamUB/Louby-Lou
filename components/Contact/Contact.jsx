import React, { useEffect, useState, useRef } from "react";
import Title from "../typography/Title/Title";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [zoom, setZoom] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("query_email", "test_email", form.current, "rPVlmRtn45wWuAQVP")
      .then(
        (result) => {
          setFormStatus("Message sent successfully!");
          let form = document.getElementById("contactForm");
          form.reset();
        },
        (error) => {
          setFormStatus(`Message not sent, error:${error}`);
        }
      );
  };

  useEffect(() => {
    let dateInput = document.getElementById("date");
    dateInput.min = new Date().toISOString().split("T")[0];

    document.getElementById("method").addEventListener("change", () => {
      if (document.getElementById("method").value === "Zoom") {
        setZoom(true);
      } else {
        setZoom(false);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Title text={"NEED A CHAT?"} />
      </div>
      <div className={styles.form__Container}>
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <div className={styles.input__Container}>
            <label htmlFor="name">Name:</label>
            <input
              autoComplete="given-name"
              type="text"
              id="name"
              name="user_name"
              placeholder="Name"
              aria-label="name"
              required
            ></input>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="email">Email:</label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="user_email"
              placeholder="Email"
              required
              aria-label="email"
            ></input>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="mobile">Mobile:</label>
            <input
              autoComplete="off"
              required
              type="tel"
              id="mobile"
              name="user_mobile"
              placeholder="Mobile"
              aria-label="mobile"
            ></input>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="method">Preferred contact method:</label>
            <select
              defaultValue={"Mobile"}
              type="contact-method"
              id="method"
              name="user_contact-method"
              aria-label="contact method drop down"
            >
              <option value="Zoom">Zoom</option>
              <option value="Mobile">Mobile</option>
              <option value="Email">Email</option>
            </select>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="event">Party Type:</label>
            <select
              aria-label="event type drop down"
              type="event-type"
              id="event"
              name="user_event-type"
            >
              <option value="Nothing">None</option>
              <option value="a Party">Parties</option>
              <option value="a Corporate event">Corporate</option>
              <option value="a Wedding">Wedding</option>
              <option value="a Christening">Christening</option>
              <option value="Giggles on Wheels">Giggles on Wheels</option>
              <option value="Hospitals or Special Needs">
                Hospital / Special Needs
              </option>
            </select>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="package">Package:</label>
            <select
              aria-label="package drop down"
              type="package"
              id="package"
              name="package"
            >
              <option value="Not Sure">Not Sure</option>
              <option value="Silly Silver"> Mobile </option>
              <option value="Golden Giggles">Golden Giggles</option>
              <option value="Playful Platinum">Playful Platinum</option>
              <option value="Crazy Custom">Crazy Custom</option>
            </select>
          </div>
          <div
            className={
              zoom === true ? styles.date__Container : styles.noDisplay
            }
          >
            <div className={styles.input__Container}>
              <label htmlFor="date">Select date:</label>
              <input
                aria-label="date"
                name="date"
                id="date"
                type="date"
              ></input>
            </div>
            <div className={styles.input__Container}>
              <label htmlFor="time">Select time:</label>
              <input
                aria-label="time"
                name="time"
                id="time"
                type="time"
              ></input>
            </div>
          </div>
          <div className={styles.input__Container}>
            <label htmlFor="query">Query:</label>
            <textarea
              aria-label="query"
              name="message"
              id="query"
              required
            ></textarea>
          </div>
          <div
            className={
              formStatus === ""
                ? styles.noDisplay
                : formStatus === "Message sent successfully!"
                ? styles.form__Success
                : styles.form__Failure
            }
          >
            <p id="message">* Message sent successfully!</p>
          </div>
          <button aria-label="send enquiry" type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
