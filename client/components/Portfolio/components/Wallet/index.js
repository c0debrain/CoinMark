import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buys } from '../../../../../imports/collections/buys';

var totalBitcoin = 0;
var totalBitcoinCash = 0;
var totalEthereum = 0;
var totalLitecoin = 0;

class Wallet extends Component {
  onBuyRemove(buy) {
    Meteor.call('buys.remove', buy);
  }
  renderBitcoin() {
    var totalBitcoin = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin') {
        totalBitcoin = totalBitcoin + parseFloat(buy.coinAmount);
      }
    });

    return <div>{totalBitcoin}</div>;
  }

  renderBitcoinCash() {
    var totalBitcoinCash = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin Cash') {
        totalBitcoinCash = totalBitcoinCash + parseFloat(buy.coinAmount);
      }
    });
    return <div>{totalBitcoinCash}</div>;
  }

  renderEthereum() {
    var totalEthereum = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Ethereum') {
        totalEthereum = totalEthereum + parseFloat(buy.coinAmount);
      }
    });

    return <div>{totalEthereum}</div>;
  }

  renderLitecoin() {
    var totalLitecoin = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Litecoin') {
        totalLitecoin = totalLitecoin + parseFloat(buy.coinAmount);
      }
    });

    return <div>{totalLitecoin}</div>;
  }

  renderRows() {
    return (
      <div>
        <tr>
          <td>Bitcoin</td>
          <td>{this.renderBitcoin()}</td>
        </tr>
        <tr>
          <td>Bitcoin Cash</td>
          <td>{this.renderBitcoinCash()}</td>
        </tr>
        <tr>
          <td>Ethereum</td>
          <td>{this.renderEthereum()}</td>
        </tr>
        <tr>
          <td>LiteCoin</td>
          <td>{this.renderLitecoin()}</td>
        </tr>
      </div>
    );
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
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
}, Wallet);
