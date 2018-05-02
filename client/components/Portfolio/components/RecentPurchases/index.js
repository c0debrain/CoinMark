import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buys } from '../../../../../imports/collections/buys';
var totalBitcoin = 0;
var totalUSD = 0;

class RecentPurchases extends Component {
  onBuyRemove(buy) {
    Meteor.call('buys.remove', buy);
  }
  renderRows() {
    return this.props.buys.map(buy => {
      return (
        <tr key={buy._id}>
          <td>{buy.createdAt.toString()}</td>
          <td>{buy.coinType}</td>
          <td>{buy.coinAmount}</td>
          <td>{buy.coinUSD}</td>

          <td>
            <span className="pull-right">
              <button
                className="btn btn-danger"
                onClick={() => this.onBuyRemove(buy)}
              >
                Remove
              </button>
            </span>
          </td>
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Crypto</th>
              <th>Amount</th>
              <th>USD</th>
              <th />
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
