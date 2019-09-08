import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Tony-sns</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
