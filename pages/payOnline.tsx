import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

const aboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <Head>
        <title>Seaways | Pay Online</title>
        <meta name="description" content="Seaways Harbour Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>Pay Online</h2>
      <p className={styles.description}>Pay Online For Phone Booking.</p>
    </div>
  );
};

export default aboutUs;
