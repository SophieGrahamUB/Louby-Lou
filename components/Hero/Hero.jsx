import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

const Hero = ({ src, type, poster }) => {
  const [IOS, setIOS] = useState(false);

  useEffect(() => {
    let ua = window.navigator.userAgent;
    let iOS = ua.match(/iPad/i) || ua.match(/iPhone/i);
    let iOSSafari = iOS && ua.match(/WebKit/i) && !ua.match(/CriOS/i);

    if (iOSSafari !== null) {
      setIOS(true);
    } else {
      null;
    }
  }, []);

  if (typeof window !== "undefined") {
    const heroVideo = document.querySelector("video");

    const requestVideo = new Request(src);

    IOS === true
      ? fetch(requestVideo).then((res) => {
          res.blob().then((vidBlob) => {
            const vidURL = URL.createObjectURL(vidBlob);
            heroVideo.src = vidURL;
          });
        })
      : null;
  }
  return (
    <div className={styles.heroContainer}>
      <video
        className={styles.hero}
        muted
        autoPlay={IOS === true ? false : true}
        loop
        poster={poster}
      >
        <source
          src={IOS === true ? null : src}
          type={type === "mp4" ? `video/mp4` : "video/webm"}
        />
      </video>
    </div>
  );
};

export default Hero;
