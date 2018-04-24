import React, { Component } from 'react';

import Chart from '../containers/Chart';
import Header from './Header/';
import MiniNav from './MiniNav/';
import '../reset.css';
import '../main.css';

export default () => {
  return (
    <div>
      <Header />
      <MiniNav />
    </div>
  );
};
