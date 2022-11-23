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
              style={item.attributes.productStyle}
              keySet={item.attributes.productName}
              title={item.attributes.productName}
              desc={item.attributes.productDescription}
              image={`${item.attributes.productImageURL}`}
              price={item.attributes.productPrice}
              merch={item.attributes.merch}
              sizing={item.attributes.sizing}
            />
          </div>
        ))}
    </div>
  );
};

export default Shop;

// Roger Rabbit Doll JSON
// {
//   "id":2,
//   "attributes":
//   {
//       "productName":"Roger the Rabbit Doll",
//       "productDescription":"Get your very own Roger the Rabbit Doll!",
//       "productPrice":19,
//       "productImageURL": "/images/shop/roger_rabbit_doll.jpg"

//   }
// },
