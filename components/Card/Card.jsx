import React from "react";
import styles from "./Card.module.scss";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import Image from "next/image";
import Book from "../Book/Book";

const Card = ({ title, desc, img, pos, button, buttonType, imageAlt }) => {
  return (
    <div
      className={
        pos === "left" ? styles.container__Left : styles.container__Right
      }
    >
      <div className={styles.details__Container}>
        <div className={styles.title__Container}>
          <Title text={title} />
        </div>
        <div className={styles.body__Container}>
          <Body text={desc} />
          <Book button={button} type={buttonType} />
        </div>
      </div>
      <div className={styles.image__Container}>
        <Image
          width={400}
          height={400}
          src={img}
          className={styles.card__Image}
          alt={imageAlt}
          priority
        />
      </div>
    </div>
  );
};

export default Card;
