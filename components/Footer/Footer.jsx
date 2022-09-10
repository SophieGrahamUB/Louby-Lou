import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.socials}>
          <a href={"https://www.facebook.com/loubylouclown/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
          <a href={"https://www.instagram.com/loubylouclown"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 30 30"
            >
              <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
            </svg>
          </a>
        </div>
        <div className={styles.content}>
          <p>
            Contact: <a href="mailto:lucy.wilkinson1@me.com">lucy.wilkinson1@me.com</a>
          </p>
          <a
            href={
              "https://app.enzuzo.com/policies/tos/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI5Mzh9.qi-TmCteHm9P8yG2UGwHHAZ3qZ2P0bWqtDOFI7DYbB4"
            }
          >
            <p>Terms & Conditions</p>
          </a>
          <a
            href={
              "https://app.enzuzo.com/policies/privacy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI0OTZ9.XZ4BloXpVAugLAEm9pRDSDanFPK216zdzSBBBf1pnO4"
            }
          >
            <p>Privacy</p>
          </a>
        </div>
      </div>
      <p>Ⓒ Zorilla 2022</p>
    </div>
  );
};

export default Footer;
