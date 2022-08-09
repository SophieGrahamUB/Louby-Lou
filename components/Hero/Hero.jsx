import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src }) => {
  return (
    <div className={styles.heroContainer}>
      <video
        playsInline
        className={styles.hero}
        muted
        loop
        autoPlay
        style={{ clipPath: "url(#clipper)" }}
      >
        <source src="/videos/Pink_n_purple_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
