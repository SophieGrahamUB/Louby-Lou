import React, { useState, useEffect } from "react";
import Checkout from "../Checkout/Checkout";
import styles from "./Basket.module.scss";
import { useBasket } from "./BasketManager";

const Basket = () => {
  const { contents, setContents } = useBasket();

  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (contents?.length > 0) {
      window.sessionStorage.setItem("Cart", JSON.stringify(contents));
    }
  }, [toggle]);

  const lastItemCheck = () => {
    if (typeof window !== "undefined") {
      if (contents?.length <= 1) {
        window.sessionStorage.setItem("Cart", JSON.stringify([]));
      }
    }
  };

  return (
    <div className={styles.basketContainer}>
      <div>
        <div
          className={styles.basket}
          onClick={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
        >
          <div
            className={
              contents && contents?.length > 0 ? styles.basketCount : styles.noShow
            }
          >
            {contents && contents?.length}
          </div>
          <svg
            id="Layer_1"
            x="50%"
            y="50%"
            viewBox="0 0 180 180 "
            preserveAspectRatio="xMidYMin"
          >
            <path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z" />
          </svg>
        </div>

        <div
          tabIndex={0}
          className={toggleMenu === true ? styles.basketDropdown : styles.noShow}
          onBlur={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
        >
          <h1>
            {contents && contents?.length != 0 ? "Basket:" : "Add items to the Basket!"}
          </h1>
          <ul>
            {contents && contents?.length != 0
              ? contents.map((item) => (
                  <li key={item.id}>
                    <p>{item?.venue === undefined ? item?.productName : null}</p>
                    <p>{item?.ammount === undefined ? null : `(x${item?.ammount})`}</p>
                    <p>£{item?.total}</p>
                    <button
                      id={item?.id}
                      onClick={(e) => {
                        lastItemCheck();
                        setToggle((prevToggle) => !prevToggle);
                        setContents(contents.filter((data) => data.id != e.target.id));
                      }}
                    >
                      x
                    </button>
                  </li>
                ))
              : null}
          </ul>
          <div className={contents && contents?.length != 0 ? styles.underline : null} />
          <h2>{contents && contents?.length != 0 ? "Total:" : ""}</h2>
          <h3 className={contents && contents?.length > 0 ? null : styles.noShow}>
            £
            {contents && contents?.length < 0
              ? ""
              : contents && contents?.reduce((acc, current) => acc + current.total, 0)}
          </h3>
          <Checkout
            className={
              contents && contents?.length != 0 ? styles.checkoutButton : styles.noShow
            }
            basketData={contents}
          >
            Checkout
          </Checkout>
        </div>
      </div>
    </div>
  );
};

export default Basket;
