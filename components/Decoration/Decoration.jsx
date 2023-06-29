import React from "react";
import styles from "./Decoration.module.scss";

const Decoration = ({ position }) => {
  return (
    <div className={styles.container}>
      <div className={position === "left" ? styles.left : styles.right} />
    </div>
  );
};

export default Decoration;
