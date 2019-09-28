import React from "react";
import Head from "next/head";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import PropTypes from "prop-types";

import reducer from "../redux/reducers";
import AppLayout from "../components/layout/AppLayout";

const TonySNS = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Tony-sns</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.4/antd.js" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

TonySNS.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  const middlewares = []; // call between action and store
  // compose : middleware 여러개 합성
  // redux-devtools 합성하려면 compose 필수
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(TonySNS);
