import React from "react";
import styles from "./Burger.module.scss";
import Link from "next/link";

const Burger = () => {
  let links = [
    { name: "HOME", target: "/" },
    { name: "ABOUT", target: "/about" },
    { name: "EVENTS", target: "/events" },
    { name: "SERVICES", target: "/services" },
    { name: "PRICING", target: "/pricing" },
    { name: "SHOP", target: "/shop" },
    { name: "GALLERY", target: "/gallery" },
  ];

  return (
    <div className={styles.container}>
      <button
        aria-label="Burger Menu"
        onClick={() => {
          d.showModal();
        }}
        style={{ background: "none", border: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 83 81"
          fill="0"
        >
          <rect width="83" height="18" rx="5" fill="#CF21EC" />
          <rect y="32" width="83" height="17" rx="5" fill="#CF21EC" />
          <rect y="63" width="83" height="18" rx="5" fill="#CF21EC" />
        </svg>
      </button>
      <dialog id="d" className={styles.dialog}>
        <div className={styles.links__Container}>
          <button
            onClick={() => {
              d.close();
            }}
            className={styles.button__Close}
          >
            X
          </button>
          <ul style={{ paddingLeft: 0 }}>
            {links.map((item, idx) => (
              <li className={styles.links__Item} key={idx}>
                <Link className={styles.links} href={item.target} key={idx}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </div>
  );
};

export default Burger;
