import React from "react";
import styles from "./Body.module.scss";

const Body = ({ text }) => {
  return (
    <>
      {text.map((item, idx) => (
        <p lang="en" className={styles.body} key={idx}>
          {item}
        </p>
      ))}
    </>
  );
};

export default Body;
