import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

const aboutUs: NextPage = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <Head>
        <title>Seaways | About Us</title>
        <meta name="description" content="Seaways Harbour Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.description}>
        With the vision of providing multi modal commute for coastal and inland
        water way, Infinity Harbour Services Read more...
      </p>
    </div>
  );
};

export default aboutUs;
