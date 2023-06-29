import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Body from "../typography/Body/Body";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer__Container}>
          <div className={styles.logo__Container}>
            <Image
              alt="Louby Lou Logo"
              width={400}
              height={400}
              className={styles.logo}
              src={"/images/logos/louby_lou_white.webp"}
            ></Image>
          </div>

          <div className={styles.details__Container}>
            <Body text={["Details"]} />
            <Body
              text={["Mobile: 07779013806", "Email: lucy@loubylou.co.uk"]}
            />

            <Link href="https://app.enzuzo.com/policies/privacy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI0OTZ9.XZ4BloXpVAugLAEm9pRDSDanFPK216zdzSBBBf1pnO4">
              <Body text={["Privacy"]} />
            </Link>

            <Link
              href={
                "https://app.enzuzo.com/policies/tos/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklEIjoxMTU3NiwiQ3VzdG9tZXJOYW1lIjoiY3VzdC11STFEVTE4cyIsIkN1c3RvbWVyTG9nb1VSTCI6IiIsIlJvbGVzIjpbInJlZmVycmFsIl0sIlByb2R1Y3QiOiJlbnRlcnByaXNlIiwiaXNzIjoiRW56dXpvIEluYy4iLCJuYmYiOjE2NTcwODI5Mzh9.qi-TmCteHm9P8yG2UGwHHAZ3qZ2P0bWqtDOFI7DYbB4"
              }
            >
              <Body text={["Terms and Conditions"]} />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.dev}>
        <Link
          className={styles.dev__Link}
          href={"https://www.linkedin.com/in/harrison-walton-9509ba153/"}
        >
          <p>Need a website?</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
          >
            <path
              d="M9.53781 0.221924H6.60995C6.35479 0.221924 6.14798 0.433424 6.14798 0.694375C6.14798 0.955325 6.35479 1.16683 6.60995 1.16683H8.42252L3.99274 5.6971C3.81232 5.88162 3.81232 6.18074 3.99274 6.36526C4.08298 6.45749 4.20119 6.50363 4.3194 6.50363C4.43762 6.50363 4.55583 6.45749 4.64607 6.36526L9.07584 1.83498V3.68872C9.07584 3.94967 9.28265 4.16117 9.53781 4.16117C9.79297 4.16117 9.99978 3.94967 9.99978 3.68872V0.694427C9.99978 0.433424 9.79297 0.221924 9.53781 0.221924Z"
              fill="#858585"
            />
            <path
              d="M7.64816 4.16106C7.393 4.16106 7.18619 4.37256 7.18619 4.63351V9.27697H0.923939V2.87264H5.73756C5.99272 2.87264 6.19953 2.66114 6.19953 2.40019C6.19953 2.13923 5.99272 1.92773 5.73756 1.92773H0.46197C0.206808 1.92773 0 2.13923 0 2.40019V9.74942C0 10.0104 0.206808 10.2219 0.46197 10.2219H7.64816C7.90332 10.2219 8.11013 10.0104 8.11013 9.74942V4.63351C8.11013 4.37256 7.90332 4.16106 7.64816 4.16106Z"
              fill="#858585"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Footer;
