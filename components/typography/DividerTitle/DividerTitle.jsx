import React from "react";
import Title from "../Title/Title";
import Body from "../Body/Body";
import styles from "./DividerTitle.module.scss";
import Book from "@/components/Book/Book";

const DividerTitle = ({ title, text, spacing, button, buttonType }) => {
  switch (spacing) {
    case "none":
      return (
        <div className={styles.container}>
          <div className={styles.title__Container}>
            <Title text={title} />
          </div>

          <div className={styles.body__Container}>
            <Body text={text} />
            <Book type={buttonType} button={button} />
          </div>
        </div>
      );
      break;
    case "small":
      return (
        <div className={styles.container__Small}>
          <div className={styles.title__Container}>
            <Title text={title} />
          </div>

          <div className={styles.body__Container}>
            <Body text={text} />
            <Book type={buttonType} button={button} />
          </div>
        </div>
      );
      break;
    case "medium":
      return (
        <div className={styles.container__Medium}>
          <div className={styles.title__Container}>
            <Title text={title} />
          </div>

          <div className={styles.body__Container}>
            <Body text={text} />
            <Book type={buttonType} button={button} />
          </div>
        </div>
      );
      break;
    case "large":
      return (
        <div className={styles.container__Large}>
          <div className={styles.title__Container}>
            <Title text={title} />
          </div>

          <div className={styles.body__Container}>
            <Body text={text} />
            <Book type={buttonType} button={button} />
          </div>
        </div>
      );
      break;
    case undefined:
      return (
        <div className={styles.container}>
          <div className={styles.title__Container}>
            <Title text={title} />
          </div>

          <div className={styles.body__Container}>
            <Body text={text} />
            <Book type={buttonType} button={button} />
          </div>
        </div>
      );
      break;
  }
};

export default DividerTitle;
