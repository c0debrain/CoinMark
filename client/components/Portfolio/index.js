import React, { Component } from 'react';
import RecentPurchases from './components/RecentPurchases';
import Wallet from './components/Wallet';
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
        <div className="col-md-5">
          <span className="pull-left">
            <h1 onClick={() => this.showHideTwo()}>
              {' '}
              <span className="headersport"> Recent Purchases</span>
            </h1>
            {this.state.showMeTwo ? <RecentPurchases /> : null}
          </span>
        </div>
        <div className="col-md-5">
          <span className="pull-right">
            <h1 onClick={() => this.showHideOne()}>
              {' '}
              <span className="headersport">Wallet</span>
            </h1>
            <div>{this.state.showMeOne ? <Wallet /> : null}</div>
          </span>
        </div>
      </div>
    );
  }
}
export default Portfolio;
