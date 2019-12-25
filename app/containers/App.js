import React from 'react';
import Header from 'containers/Header';
import Layout from 'containers/Layout';
import Footer from 'containers/Footer';

// Search component
// import Search from 'containers/Search';
// import { getArrayByFieldName } from "helper";
// import firstCollection from 'data/first';
// import secondCollection from 'data/second';
// import thirdCollection from 'data/third';

import 'assets/scss/main.scss';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Layout />
      {/*<Search*/}
      {/*  array={getArrayByFieldName(secondCollection, 'name')}*/}
      {/*/>*/}
      <Footer />
    </div>
  );
};

export default App;
