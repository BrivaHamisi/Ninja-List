import Link from "next/link";
import styles  from '../styles/Home.module.css'
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="description" content="A list of ninja warriors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  );
}
