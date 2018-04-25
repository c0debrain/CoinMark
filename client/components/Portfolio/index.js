import React, { Component } from 'react';
import RecentPurchases from './components/RecentPurchases';
import Wallet from './components/Wallet';
class Portfolio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <span class="pull-right">
            <RecentPurchases />
          </span>
        </div>
        <div className="col-md-5">
          <span class="pull-right">
            <Wallet />
          </span>
        </div>
      </div>
    );
  }
}
export default Portfolio;
