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

  const fetchShopifyData = () => {
    fetch(
      "https://16b34b.myshopify.com/admin/api/2023-04/products/8281235423508.json",
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "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",
        },
      }
    )
      .then((res) => res.text())
      .then((text) => console.log(text));
  };

  useEffect(() => {
    fetchData();
    fetchShopifyData();
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
              sizes={item.attributes.sizes}
              sizing={item.attributes.sizing}
            />
          </div>
        ))}
    </div>
  );
};

export default Shop;
