import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import AppLayout from "../components/layout/AppLayout";

const TonySNS = ({ Component }) => {
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
        <Component />
      </AppLayout>
    </>
  );
};

TonySNS.propTypes = {
  Component: PropTypes.elementType
};

export default TonySNS;
