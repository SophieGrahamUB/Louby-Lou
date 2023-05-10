import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src, type }) => {
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
        <source src={src} type={type === "mp4" ? `video/mp4` : "video/webm"} />
      </video>
    </div>
  );
};

export default Hero;
