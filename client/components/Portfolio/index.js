import React, { Component } from 'react';
import RecentPurchases from './components/RecentPurchases/index';
import RecentHeader from './components/RecentPurchases/header';
import Wallet from './components/Wallet/index';
import WalletHeader from './components/Wallet/header';

import './index.css';

class Portfolio extends Component {
  //Constructor inherits main class functionality. Sets states of both headers to showing true.
  constructor() {
    super();
    this.state = {
      showMeOne: true
    };
    this.state = {
      showMeTwo: true
    };
  }
  //method for showing RecentPurchases
  showHideTwo() {
    this.setState({
      showMeTwo: !this.state.showMeTwo
    });
  }
  //method for showing Wallet
  showHideOne() {
    this.setState({
      showMeOne: !this.state.showMeOne
    });
  }

  render() {
    return (
      <div className="row">
        <div onClick={() => this.showHideTwo()} className="column">
          {' '}
          <RecentHeader />
          <div className="RecentTable">
            {this.state.showMeTwo ? <RecentPurchases /> : null}
          </div>
        </div>
        <div onClick={() => this.showHideOne()} className="column">
          {' '}
          <WalletHeader />
          <div className="RecentTable">
            {this.state.showMeOne ? <Wallet /> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
