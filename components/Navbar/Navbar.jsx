import { React, useState, useRef } from "react";
import Basket from "../Basket/Basket";
import styles from "./Navbar.module.scss";
import links from "./links.json";
import Link from "next/link";

const Navbar = ({ title, altText, button }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navMenu = useRef(null);

  return (
    <nav className={styles.container}>
      <ul>
        <li className={button ? styles.button : styles.nodisplay}>
          <Link href="/events-page/" passHref>
            <a>
              <button>Book Tickets</button>
            </a>
          </Link>
        </li>
        <li className={styles.titleContainer}>
          <h1>{title}</h1>
          <p> {altText}</p>
        </li>
        <li className={styles.menuContainer}>
          <Basket />
          <button
            className={styles.menu}
            aria-label="Menu"
            tabIndex="0"
            onClick={() => navMenu.current.focus({ preventScroll: true })}
          >
            <span className={styles.menuIcon} tabIndex="0" />
          </button>
        </li>
      </ul>
      <div
        className={toggleMenu ? styles.dropdownMenu : styles.nodisplay}
        tabIndex="0"
        ref={navMenu}
        onFocus={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
        onBlur={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
      >
        {links.map((item) => (
          <Link key={item.link} href={item.link}>
            <a>
              <p>{item.name}</p>
              <div />
            </a>
          </Link>
        ))}
      </div>
      <div />
    </nav>
  );
};

export default Navbar;
