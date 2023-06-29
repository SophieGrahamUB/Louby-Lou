import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title, button, src }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} button={button} />
      <video
        poster="/images/pictures/louby_lou_hero_poster.webp"
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
