import React, { Component } from 'react';

import Chart from '../containers/Chart';
import Header from './Header/';
import '../reset.css';
import '../main.css';

export default () => {
  return (
    <div>
      <Header />
      <Chart />
    </div>
  );
};
