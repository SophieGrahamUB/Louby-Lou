import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import styles from "./Shop.module.scss";
import shopJSON from "../../pages/api/shops.json";

const Shop = () => {
  const [shopAPI, setShopAPI] = useState([]);

  const fetchData = () => {
    const data = shopJSON;
    setShopAPI([...shopAPI, data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.shopContainer}>
      {shopAPI &&
        shopAPI[0]?.data.map((item) => (
          <div key={item.attributes.productName}>
            <ProductCard
              keySet={item.attributes.productName}
              title={item.attributes.productName}
              desc={item.attributes.productDescription}
              image={`${item.attributes.productImageURL}`}
              price={item.attributes.productPrice}
            />
          </div>
        ))}
    </div>
  );
};

export default Shop;
