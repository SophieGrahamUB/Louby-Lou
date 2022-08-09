import React from "react";
import styles from "./Title.module.scss";

const Title = ({ title }) => {
  return (
    <span className={styles.titleContainer}>
      <h1>{title}</h1>
    </span>
  );
};

export default Title;
