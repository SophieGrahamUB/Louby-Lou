import React from "react";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.juicer.io/api/feeds/loubylouclown/iframe"
        frameborder="0"
        className={styles.gallery}
      ></iframe>
    </div>
  );
};

export default Gallery;
