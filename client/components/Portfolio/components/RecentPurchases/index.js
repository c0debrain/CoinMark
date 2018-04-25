import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class RecentPurchases extends Component {
  renderRows() {
    return (
      <tr>
        <td>Date</td>
        <td>Coin Type</td>
        <td>Coin Amount</td>
        <td>USD Amount</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Month Date</th>
            <th>Coin Type</th>
            <th>Coin Amount and type</th>
            <th>$$$</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }
}

export default RecentPurchases;
