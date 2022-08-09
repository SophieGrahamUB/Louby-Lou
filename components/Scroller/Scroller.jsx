import { React, useState, useLayoutEffect } from "react";
import styles from "./Scroller.module.scss";

const Scroller = () => {
  const scrollDown = () => {
    scrollTo(0, 800);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => scrollDown()}>
        V
      </button>
    </div>
  );
};

export default Scroller;
