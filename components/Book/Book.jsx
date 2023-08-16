import React from "react";
import styles from "./Book.module.scss";
import Link from "next/link";
import Contact from "../Contact/Contact";

const Book = ({ button, type, location }) => {
  const handleOpen = (e) => {
    document.getElementById("e").showModal();
  };

  const handleClose = (e) => {
    document.getElementById("e").close();
  };

  switch (type) {
    case "county__link":
      return (
        <Link className={styles.link} href={`/services/location/${location}`}>
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            See More
          </button>
        </Link>
      );

    case "town__link":
      return (
        <Link
          className={styles.link}
          href={`/services/location/town/${location}`}
        >
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            See More
          </button>
        </Link>
      );

    case "events":
      return (
        <Link className={styles.link} href={"/events"}>
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Book Events
          </button>
        </Link>
      );
      break;
    case "services":
      return (
        <Link className={styles.link} href={"/services"}>
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Services
          </button>
        </Link>
      );
      break;
    case "pricing":
      return (
        <Link className={styles.link} href={"/pricing"}>
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Enquire Now
          </button>
        </Link>
      );
      break;
    case "enquire":
      return (
        <>
          <button
            className={button === true ? styles.button : styles.noDisplay}
            onClick={(e) => {
              // e.showModal();
              handleOpen(e);
            }}
          >
            Enquire Now
          </button>
          <dialog id="e" className={styles.enquire__Dialog}>
            <button
              className={styles.enquire__Close}
              onClick={(e) => {
                handleClose(e);
              }}
            >
              x
            </button>
            <Contact />
          </dialog>
        </>
      );
      break;

    case "navigation":
      return (
        <>
          <button
            className={
              button === true ? styles.button__Navigation : styles.noDisplay
            }
            onClick={(e) => {
              // e.showModal();
              handleOpen(e);
            }}
          >
            Enquire Now
          </button>
          <dialog id="e" className={styles.enquire__Dialog}>
            <button
              className={styles.enquire__Close}
              onClick={(e) => {
                handleClose(e);
              }}
            >
              x
            </button>
            <Contact />
          </dialog>
        </>
      );
      break;
  }
};

export default Book;
