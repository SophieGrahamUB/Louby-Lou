import { React } from "react";
import Link from "next/dist/client/link";

import content from "./content.json";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.container}>
      <h1>Services:</h1>
      <div className={styles.container_underline}></div>
    </div>
  );
};

export default Services;
