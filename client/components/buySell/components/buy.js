import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Buys } from '../../../../imports/collections/buys';

class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  onBuyClick(event) {
    event.preventDefault();
    Meteor.call('buys.insert');
  }
  render() {
    return (
      <div>
        {this.props.cryptocurrencyLabel}
        <br />
        {this.props.spotPrice}
        <button
          className="btn btn-primary"
          href="#"
          onClick={this.onBuyClick.bind(this)}
        >
          Buy
        </button>
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
