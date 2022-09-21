import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seaways</title>
        <meta name="description" content="Seaways Harbour Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Seaways</h1>

        <p className={styles.description}>BOOK YOUR WATERTAXI TICKETS NOW</p>

        <div className={styles.grid}>
          <a href="./" className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>
              MyBoatRide, your trusted partner for watertaxi within Mumbai
              Harbour. We are providing the best services at excellent rates.
            </p>
          </a>

          <a href="/aboutUs" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>
              With the vision of providing multi modal commute for coastal and
              inland water way, Infinity Harbour Services Read more...
            </p>
          </a>

          <a href="./payOnline" className={styles.card}>
            <h2>Pay Online &rarr;</h2>
            <p>Pay Online For Phone Booking.</p>
          </a>

          <a href="https://myboatride.com/gallery.aspx" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Photo gallery view all images.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Developed by <span className={styles.logo}>Darshan Konkati</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
