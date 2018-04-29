import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Buys } from '../../../../imports/collections/buys';

class Buy extends Component {
  onBuyClick(event) {
    event.preventDefault();
    Buys.insert({
      coinType: <div>{this.props.cryptocurrencyLabel}</div>,
      coinAmount: <div>{this.props.spotPrice}</div>
    });
    Meteor.call('buys.insert');
  }

  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call('buys.insert', this.refs.buy.value, error => {
      if (error) {
      } else {
        this.setState({ error: '' });
        this.refs.buy.value = '';
      }
    });
  }

  /*onBuyClick(event) {
    event.preventDefault();
    Meteor.call('buys.insert');
  }*/
  render() {
    return (
      <div>
        {this.props.cryptocurrencyLabel}
        <br />
        {this.props.spotPrice}
      </div>
    );
  }
}

Buy.propTypes = {
  cryptocurrencyLabel: PropTypes.string.isRequired,
  durationLabel: PropTypes.string.isRequired,
  spotPrice: PropTypes.number.isRequired
};

export default Buy;
