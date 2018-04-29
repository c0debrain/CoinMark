import React, { Component } from 'react';
import RecentPurchases from './components/RecentPurchases';
import Wallet from './components/Wallet';
class Portfolio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <span class="">
            <RecentPurchases />
          </span>
        </div>
        <div className="col-md-4">
          <span class="pull-right">
            <Wallet />
          </span>
        </div>
      </div>
    );
  }
}
export default Portfolio;
