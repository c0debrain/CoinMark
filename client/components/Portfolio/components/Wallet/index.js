import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Buys } from '../../../../../imports/collections/buys';

var totalBitcoin = 0;
var totalBitcoinCash = 0;
var totalEthereum = 0;
var totalLitecoin = 0;
var totalBitcoinUSD = 0;
var totalBitcoinCashUSD = 0;
var totalEthereumUSD = 0;
var totalLitecoinUSD = 0;

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

  renderBitcoinUSD() {
    var totalBitcoinUSD = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin') {
        totalBitcoinUSD = totalBitcoinUSD + parseFloat(buy.coinUSD);
      }
    });

    return <div>{totalBitcoinUSD}</div>;
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

  renderBitcoinCashUSD() {
    var totalBitcoinCashUSD = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Bitcoin Cash') {
        totalBitcoinCashUSD = totalBitcoinCashUSD + parseFloat(buy.coinUSD);
      }
    });
    return <div>{totalBitcoinCashUSD}</div>;
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

  renderEthereumUSD() {
    var totalEthereumUSD = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Ethereum') {
        totalEthereumUSD = totalEthereumUSD + parseFloat(buy.coinUSD);
      }
    });

    return <div>{totalEthereumUSD}</div>;
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

  renderLitecoinUSD() {
    var totalLitecoinUSD = 0;
    this.props.buys.map(buy => {
      if (buy.coinType === 'Litecoin') {
        totalLitecoinUSD = totalLitecoinUSD + parseFloat(buy.coinUSD);
      }
    });

    return <div>{totalLitecoinUSD}</div>;
  }

  renderRows() {
    return (
      <div className="">
        <tr>
          <th scope="row">Bitcoin</th>
          <td>{this.renderBitcoin()}</td>
          <td />
          <td>{this.renderBitcoinUSD()}</td>
        </tr>
        <tr>
          <th scope="row">Bitcoin Cash</th>
          <td>{this.renderBitcoinCash()}</td>
          <td />
          <td>{this.renderBitcoinCashUSD()}</td>
        </tr>
        <tr>
          <th scope="row">Ethereum</th>
          <td>{this.renderEthereum()}</td>
          <td />
          <td>{this.renderEthereumUSD()}</td>
        </tr>
        <tr>
          <th scope="row">LiteCoin</th>
          <td>{this.renderLitecoin()}</td>
          <td />
          <td>{this.renderLitecoinUSD()}</td>
        </tr>
        <tr>
          <th scope="row" />
          <td>.</td>
          <td>.</td>
          <td>.</td>
        </tr>
      </div>
    );
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Crypto</th>
              <th scope="col">Amount</th>
              <th scope="col">USD</th>
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
}, Wallet);
