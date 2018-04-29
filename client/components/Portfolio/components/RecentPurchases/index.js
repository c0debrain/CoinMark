import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buys } from '../../../../../imports/collections/buys';

class RecentPurchases extends Component {
  onBuyRemove(buy) {
    Meteor.call('buys.remove', buy);
  }
  renderRows() {
    return this.props.buys.map(buy => {
      return (
        <tr key={buy._id}>
          <td>{toString(buy.createdAt)}</td>
          <td>{buy.coinType}</td>
          <td>{buy.coinAmount}</td>
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

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Crypto</th>
            <th>Amount</th>
            <th />
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('buys');
  return { buys: Buys.find({}).fetch() };
}, RecentPurchases);
