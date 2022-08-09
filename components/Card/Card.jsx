import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, desc, src, left, expanded, button }) => {
  const [infoToggle, setInfoToggle] = useState(false);

  return (
    <section className={left ? styles.cardLeft : styles.card}>
      <div className={styles.card_image}>
        <img
          src={src}
          alt={title}
          className={left ? styles.borderLeft : styles.borderRight}
        />
      </div>

      <div className={styles.card_information}>
        <span>{title}</span>
        <p>{desc}</p>
        <button
          className={button === true ? null : styles.noDisplay}
          onClick={() => setInfoToggle((prevCheck) => !prevCheck)}
        >
          More info
        </button>
        <div className={styles.card_underline} />
      </div>

      <div className={infoToggle === true ? styles.moreInfoContainer : styles.noDisplay}>
        <button onClick={() => setInfoToggle((prevCheck) => !prevCheck)}>x</button>
        <div className={styles.moreInfo}>
          <h1>{title}</h1>
          <p>{expanded}</p>
          <div />
        </div>
        <img />
      </div>
    </section>
  );
};

export default Card;
