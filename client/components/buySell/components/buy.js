import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Buys } from '../../../../imports/collections/buys';

const Buy = ({ cryptocurrencyLabel, durationLabel, spotPrice }) => {
  //handleSubmit(event) {
  //event.preventDefault();

  //Meteor.call('buys.insert');
  //}

  return (
    /**<form onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
        <label>Add server</label>
        <input ref="buy" className="form-control" />
      </div>
      <div className="text-danger">{this.state.error}</div>
      <button className="btn btn-primary">Add!</button>
    </form>*/
    <div>
      <div>{cryptocurrencyLabel}</div>
      <br />
      <div>{spotPrice}</div>
    </div>
  );
};

Buy.propTypes = {
  cryptocurrencyLabel: PropTypes.string.isRequired,
  durationLabel: PropTypes.string.isRequired,
  spotPrice: PropTypes.number.isRequired
};

export default Buy;
