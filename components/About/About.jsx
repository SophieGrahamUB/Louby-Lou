import React from "react";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import styles from "./About.module.scss";
import Book from "../Book/Book";

const About = ({ title, body, spacer, button, buttonType }) => {
  return (
    <div className={spacer ? styles.container__Spacer : styles.container}>
      <div className={styles.about__Container}>
        {/* All text passed into titles gets turned into uppercase */}
        <div className={styles.title__Container}>
          <Title text={title} />
        </div>

        {/* Pass an array into body to signify different paragraphs */}
        <Body text={body} />
        <Book type={buttonType} button={button} />
      </div>
    </div>
  );
};

export default About;
