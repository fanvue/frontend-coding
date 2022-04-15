import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Frontend coding challenge</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fanvue&apos;s Frontend coding challenge
        </h1>

        <div className={styles.grid}>
          <Link href="/feed">
            <a className={styles.card}>
              <h2>Go to Feed page</h2>
              <p>And start the first task</p>
            </a>
          </Link>
          <Link href="/vault">
            <a className={styles.card}>
              <h2>Go to Vault page</h2>
              <p>And start the second task</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
