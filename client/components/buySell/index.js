import React, { Component } from 'react';
import Helmet from 'react-helmet';

import PriceTable from '../PriceTable';
import Tabs from '../Tabs';

//import Buy from './components/buy';
import { Buys } from '../../../imports/collections/buys';

import { fetchPriceHistory, fetchSpotPrices } from '../../api';
import { CRYPTOCURRENCY, DURATION, POLL_FREQUENCY } from '../../constants';
import { formatCurrency } from '../../utils';

import './index.css';

// `Object.values` polyfill for IE (since it's not supported by CRA)
const CRYPTOCURRENCY_LIST = Object.keys(CRYPTOCURRENCY).map(
  e => CRYPTOCURRENCY[e]
);
const DURATION_LIST = Object.keys(DURATION).map(e => DURATION[e]);

const ACTIVE_CURRENCY = 'usd';
const INITIAL_STATE = {
  priceHistory: [],
  spotPrice: { amount: '0', currency: ACTIVE_CURRENCY },
  selectedCryptocurrencyIndex: 0,
  selectedDurationIndex: 2,
  spotPrices: []
};

class BuySell extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    this.fetchPriceData();
    this.startPriceDataPolling();
  }

  componentWillUnmount() {
    this.clearPriceDataPolling();
  }

  startPriceDataPolling() {
    this.pollingId = setInterval(() => {
      this.fetchPriceData();
    }, POLL_FREQUENCY);
  }

  clearPriceDataPolling() {
    clearInterval(this.pollingId);
  }

  fetchPriceData() {
    const { selectedCryptocurrencyIndex, selectedDurationIndex } = this.state;

    const promises = [
      fetchPriceHistory(
        CRYPTOCURRENCY_LIST[selectedCryptocurrencyIndex].key,
        ACTIVE_CURRENCY,
        DURATION_LIST[selectedDurationIndex].key
      ),
      fetchSpotPrices(ACTIVE_CURRENCY)
    ];

    Promise.all(promises)
      .then(([priceHistory, spotPrices]) => {
        this.setState({
          priceHistory,
          spotPrice: spotPrices[selectedCryptocurrencyIndex],
          spotPrices
        });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
  }

  handleCryptocurrencyChange = nextIndex => {
    this.setState({ selectedCryptocurrencyIndex: nextIndex }, () => {
      this.fetchPriceData();
    });
  };

  handleDurationChange = nextIndex => {
    this.setState({ selectedDurationIndex: nextIndex }, () => {
      this.fetchPriceData();
    });
  };

  renderCryptocurrencyTabs() {
    const { spotPrices } = this.state;
    const keys = [];
    const tabOptions = [];
    CRYPTOCURRENCY_LIST.forEach(({ name }, index) => {
      let key;
      let tabOption;
      if (spotPrices[index]) {
        const price = formatCurrency(spotPrices[index].amount, ACTIVE_CURRENCY);
        key = `${name} ${price}`;
        tabOption = (
          <span className="cryptocurrency" key={key}>
            <span>{name}</span>
            <span>{price}</span>
          </span>
        );
      } else {
        key = name;
        tabOption = (
          <span className="cryptocurrency" key={name}>
            {name}
          </span>
        );
      }

      keys.push(key);
      tabOptions.push(tabOption);
    });

    return (
      <Tabs
        keys={keys}
        onChange={this.handleCryptocurrencyChange}
        selectedIndex={this.state.selectedCryptocurrencyIndex}
      >
        {tabOptions}
      </Tabs>
    );
  }

  renderDurationTabs() {
    const tabOptions = DURATION_LIST.map(({ codename }) => (
      <span key={codename}>{codename}</span>
    ));

    return (
      <Tabs
        keys={DURATION_LIST.map(({ codename }) => codename)}
        onChange={this.handleDurationChange}
        selectedIndex={this.state.selectedDurationIndex}
      >
        {tabOptions}
      </Tabs>
    );
  }

  renderPriceTable() {
    const {
      priceHistory,
      selectedCryptocurrencyIndex,
      selectedDurationIndex,
      spotPrice
    } = this.state;

    return (
      <div className="table">
        <PriceTable
          cryptocurrencyLabel={
            CRYPTOCURRENCY_LIST[selectedCryptocurrencyIndex].name
          }
          priceHistory={priceHistory}
          spotPrice={+spotPrice.amount}
        />
      </div>
    );
  }

  onBuyClick(event) {
    event.preventDefault();
    const coinType = $('#coinType').val(),
      coinAmount = $('#dare_price').val();
    Meteor.call('buyCoin', coinType, coinAmount, function(err, res) {
      if (err) {
        console.log(JSON.stringify(err, null, 2));
      } else {
        console.log(res, 'success!');
      }
    });
  }

  onUpdateClick(event) {
    event.preventDefault();
    const coinType = $('#coinType').val(),
      coinAmount = $('#dare_price').val();
    Meteor.call('incrementCoin', function(err, res) {
      if (err) {
        console.log(JSON.stringify(err, null, 2));
      } else {
        // Do whatever
        console.log(res, 'success!');
      }
    });
  }

  renderBuy() {
    const { selectedCryptocurrencyIndex, spotPrice } = this.state;

    $('#dare_price').change(function() {
      var price = Number($(this).val());
      var total = price * $('#coinAmountUSD').val();
      $('#total_price_amount').val(total);
    });

    function updatePrice(val) {
      $('#dare_price').val(val);
      $('#dare_price').trigger('change');
    }
    updatePrice();

    return (
      <div className="table">
        <form>
          <div className="form-group">
            <input
              type="hidden"
              value={CRYPTOCURRENCY_LIST[selectedCryptocurrencyIndex].name}
              id="coinType"
              readonly="readonly"
            />

            <input type="hidden" value={spotPrice.amount} id="coinAmountUSD" />

            <input
              className="span4 input-big coinAmountBox"
              id="dare_price"
              name="price"
              size="30"
              type="number"
              onChange="updatePrice()"
            />
            <br />
            <input
              className="span4 input-big"
              id="total_price_amount"
              size="20"
              readonly="readonly"
              value=""
            />
          </div>
          <div className="text-danger" />
          <button
            className="btn btn-primary"
            onClick={this.onBuyClick.bind(this)}
          >
            Buy
          </button>
          <button
            className="btn btn-primary"
            onClick={this.onUpdateClick.bind(this)}
          >
            Update
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div className="dashboard">
        <div className="tabs">{this.renderCryptocurrencyTabs()}</div>
        {this.renderPriceTable()}
        {this.renderBuy()}
      </div>
    );
  }
}

export default BuySell;
