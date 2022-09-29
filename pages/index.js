import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>figma-token-test-nextjs</title>
        <meta name="description" content="figma-token-test-nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>figma-token-test-nextjs</h1>
      </main>
    </div>
  );
}
