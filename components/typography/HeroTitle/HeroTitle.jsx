import React from "react";
import styles from "./HeroTitle.module.scss";
import Book from "@/components/Book/Book";
import Link from "next/link";

const HeroTitle = ({ text, button }) => {
  return (
    <div className={styles.hero__Container}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.button__Container}>
        <Book button={button} type="services" />
        <Link href="/events">
          <button>Events</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroTitle;
