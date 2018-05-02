import React, { Component } from 'react';

import Chart from '../containers/Chart';
import Header from './Header/';
import MiniNav from './MiniNav/';
import Portfolio from './Portfolio/';

export default () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <MiniNav />
      <br />
      <Portfolio />
    </div>
  );
};
