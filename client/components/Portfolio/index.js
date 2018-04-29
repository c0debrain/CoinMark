import React, { Component } from 'react';
import RecentPurchases from './components/RecentPurchases';
import Wallet from './components/Wallet';
class Portfolio extends Component {

  //Constructor inherits main class functionality. Sets states of both headers to showing true.
  constructor(){
    super()
    this.state={
      showMeOne:true
    }
    this.state={
      showMeTwo:true
    }
  }
  //method for showing RecentPurchases
  showHideTwo(){
  this.setState({
    showMeTwo:!this.state.showMeTwo
  })
}
  //method for showing Wallet
  showHideOne(){
    this.setState({
      showMeOne:!this.state.showMeOne
    })
  }

  render() {
    return (
      <div className="row">
<<<<<<< HEAD
        <div className="col-md-5">
          <span class="pull-left">
          <h1 className="headers" onClick={()=>this.showHideTwo()}> Recent Purchases</h1>
            {
              this.state.showMeTwo?
=======
        <div className="col-md-6">
          <span class="">
>>>>>>> BuySell
            <RecentPurchases />
            :null
            }
          </span>
        </div>
        <div className="col-md-4">
          <span class="pull-right">
          <h1 className="headers" onClick={()=>this.showHideOne()}>Wallet</h1>
      {
        this.state.showMeOne?
        <Wallet />
        :null
      }
          </span>
        </div>
      </div>
    );
  }
}
export default Portfolio;
