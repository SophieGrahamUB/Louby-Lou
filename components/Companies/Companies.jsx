import React from "react";
import styles from "./Companies.module.scss";
import Title from "../typography/Title/Title";
import Image from "next/image";

const Companies = () => {
  return (
    <div className={styles.container}>
      <Title text={"Partying with:"} />
      <div className={styles.companies__Container}>
        <Image
          width={250}
          height={250}
          src={"/images/companies/BBC_mid_colour.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with Burnley Council"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/wigan_council_logo.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with Wigan Council"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/burnley_FC_logo.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with Burnley Football Club"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/reubens_retreat_clear.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with Reubens retreat"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/BBC_Radio_Manchester_clear.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with BBC Radio Manchester"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/trafford_centre_logo.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with The Trafford Centre"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/medequip4kids_clear.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with medequip4kids"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/RMCH_logo.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with Royal Manchester Children's Hospital"
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/david_lloyd_logo.webp"}
          className={styles.companies__Image}
          alt="Louby Lou has partied with David Lloyds country clubs"
        />
      </div>
    </div>
  );
};

export default Companies;
