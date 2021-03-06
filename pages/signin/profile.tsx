import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useDocument from "../hooks/useDocument";
import Link from "next/link";

const Home: NextPage = () => {
  const document = useDocument();
  // if (!!document) {
  //   console.log(document.getElementById("never"));
  //   return <div>Hello </div>;
  // }
  // const a = document.getElementById("never");
  console.log(document);
  return (
    <div>
      <Head>
        <title>Passeport Cegids</title>
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
        <Link href="/signin/confirmation"> Send </Link>
        <h3>The user will have to type the Email, firstName and lastName</h3>
        <button onClick={() => alert("The information has been sent")}>
          Send form
        </button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
