import React, { useState, useEffect } from "react";
import styles from "./Partners.module.scss";
import partnersJSON from "../../pages/api/partners.json";

const Partners = () => {
  const [partnersAPI, setPartnersAPI] = useState([]);

  const fetchData = () => {
    const data = partnersJSON;
    setPartnersAPI([...partnersAPI, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.partnersContainer}>
      <h1>Partying with:</h1>
      <div className={styles.logosContainer}>
        {partnersAPI &&
          partnersAPI[0]?.data.map((item) => (
            <img
              key={item.attributes.meta}
              className={styles.logo}
              alt={item.attributes.meta}
              src={`${item.attributes.logoImageURL}`}
            ></img>
          ))}
      </div>
    </div>
  );
};

export default Partners;
