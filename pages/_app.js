import React from 'react';
import '../styles/globals.css';
import Layout from "../components/layout/Layout";

const _App = ({Component, pageProps}) => {

  return <Layout><Component {...pageProps} /></Layout>
}

export default _App;