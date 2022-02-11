import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Code from '../components/code'
// <link rel="icon" href="/favicon.ico" />

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>unblock.d - coming soon</title>
        <meta name="description" content="unblock.d - coming soon" />
      </Head>
        <div className={styles.center}>
          <img src="/soon.png" alt="Logo"/>
        </div>
    <div className={styles.center}>
        <img src="/logo.png" alt="Logo"/>
        </div>

    </div>
  );
};

export default Home;
