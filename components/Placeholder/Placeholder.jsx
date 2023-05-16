import React from "react";
import styles from "./Placeholder.module.scss";

const Placeholder = ({ src }) => {
  return (
    <div className={styles.heroContainer}>
      <video
        className={styles.hero}
        muted
        loop
        autoPlay
        playsInline
        disablePictureInPicture
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

export default Placeholder;
