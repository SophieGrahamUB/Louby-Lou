import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src, type }) => {
  if (type === "mp4") {
    return (
      <div className={styles.heroContainer}>
        <video
          className={styles.hero}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  } else {
    return (
      <div className={styles.heroContainer}>
        <video
          className={styles.hero}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
          fetchpriority="low"
          preload="metadata"
        >
          <source src={src} type="video/webm" />
        </video>
      </div>
    );
  }
};

export default Hero;
