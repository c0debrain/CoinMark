import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Wallet extends Component {
  renderRows() {
    return (
      <tr>
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

export default Wallet;
