import React from "react";
import styles from "./PricingContainer.module.scss";
import Pricing from "../Pricing/Pricing";

const PricingContainer = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, idx) => (
        <Pricing key={`${idx}${item.name}`} data={item} />
      ))}
    </div>
  );
};

export default PricingContainer;
