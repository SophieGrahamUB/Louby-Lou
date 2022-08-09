import React, { useState, useEffect } from "react";
import styles from "./ProductCard.module.scss";
import { useBasket } from "../Basket/BasketManager";

const ProductCard = ({ image, title, desc, price, keySet }) => {
  const [count, setCount] = useState(0);

  const { contents, setContents } = useBasket();

  const [toggle, setToggle] = useState(false);

  const [countPrice, setCountPrice] = useState(0);

  useEffect(() => {
    if (contents?.length > 0) {
      window.sessionStorage.setItem("Cart", JSON.stringify(contents));
    }
  }, [toggle]);

  useEffect(() => {
    setToggle(false);
    setCount(0);
  }, []);

  const addToBasket = () => {
    if (count > 0) {
      console.log("+1 to basket");
      setContents([
        ...contents,
        {
          productName: title,
          total: countPrice,
          ammount: count,
          id: Math.floor(Math.random() * 10000),
        },
      ]);
      setToggle((prevToggle) => !prevToggle);
    } else {
      null;
    }
  };

  useEffect(() => {
    let x = count * price;
    setCountPrice(x);
  }, [addToBasket]);

  return (
    <div className={styles.productContainer} key={keySet}>
      <div className={styles.productDetails}>
        <img className={styles.productImage} src={image} />
        <div className={styles.productInfo}>
          <p>£{price}</p> <h1>{title}</h1> <p>{desc}</p>
        </div>
        <div className={styles.productControls}>
          <div className={styles.productAmount}>
            <button
              onClick={() => {
                count === 0 ? null : setCount(count - 1);
              }}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <div>
            <button onClick={() => addToBasket()}>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
