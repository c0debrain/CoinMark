import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buys } from '../../../../../imports/collections/buys';
var totalBitcoin = 0;
var totalUSD = 0;
import './index.css';

class RecentPurchases extends Component {
  onBuyRemove(buy) {
    Meteor.call('buys.remove', buy);
  }
  renderRows() {
    return this.props.buys.slice(-5).map(buy => {
      return (
        <tr key={buy._id}>
          <td>{buy.createdAt.toString()}</td>
          <td>{buy.coinType}</td>
          <td>{buy.coinAmount}</td>
          <td>{buy.coinUSD}</td>
        </tr>
      );
    });
  }

  renderRows2() {
    var totalBitcoin = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin') {
        totalBitcoin = totalBitcoin + parseFloat(buy.coinAmount);
      }
    });

    return <div>{totalBitcoin}</div>;
  }

  renderRows3() {
    var totalUSD = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin') {
        totalUSD = totalUSD + parseFloat(buy.coinUSD);
      }
    });
    return <div>{totalUSD}</div>;
  }

  render() {
    return (
      <div id="table">
        <table id="customers">
          <thead>
            <tr>
              <th>Date</th>
              <th>Crypto</th>
              <th>Amount</th>
              <th>USD</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('buys');
  return { buys: Buys.find({}).fetch() };
}, RecentPurchases);
