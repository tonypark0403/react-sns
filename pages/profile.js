import React from "react";
import AppLayout from "../components/layout/AppLayout";
import Head from "next/head";

const Profile = () => {
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
        <div>My Profile</div>
      </AppLayout>
    </>
  );
};

export default Profile;
