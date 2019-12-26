import React from "react";
import Head from "next/head";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import PropTypes from "prop-types";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import AppLayout from "../components/layout/AppLayout";
import rootSaga from "../sagas";

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

const myMiddleware = store => next => action => {
  console.log(action); //customizing task
  next(action); // next is dispatcher
};

export default withRedux((initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware]; // call between action and store
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(TonySNS);
