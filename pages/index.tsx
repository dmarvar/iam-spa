import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Passeport Cegid</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        <h1>Signin Page Passeport</h1>
        <h3>This is a sample to test my context</h3>
      </div>
    </div>
  );
};

export default Home;
