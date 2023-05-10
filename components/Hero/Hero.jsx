import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src, type }) => {
  if (typeof window !== "undefined") {
    const heroVideo = document.querySelector("video");

    const requestVideo = new Request(src);

    fetch(requestVideo).then((res) => {
      res.blob().then((vidBlob) => {
        const vidURL = URL.createObjectURL(vidBlob);
        heroVideo.src = vidURL;
      });
    });
  }
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
        <source type={type === "mp4" ? `video/mp4` : "video/webm"} />
      </video>
    </div>
  );
};

export default Hero;
