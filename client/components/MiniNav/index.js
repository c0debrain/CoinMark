import React, { Component } from 'react';
import Chart from '../../containers/Chart';
import BuySell from '../../components/buySell/index';
import Lex from '../../components/Lex/index';

import './index.css';

class MiniNav extends Component {
  render() {
    return (
      <div role='navigation'>
        <div className="container navcontainer">
          <ul className="nav nav-tabs">
            <li className="active navoption">
              <a data-toggle="tab" href="#dashboard" tabindex='1'>
                Dashboard
              </a>
            </li>
            <li className="navoption">
              <a data-toggle="tab" href="#buy" tabindex='2'>
                Buy/Sell
              </a>
            </li>
            <li className="navoption">
              <a data-toggle="tab" href="#lex" tabindex='3'>
                CoinBot
              </a>
            </li>
          </ul>

          <div className="tab-content" role='main'>
            <div id="dashboard" className="tab-pane fade in active">
              <p className="tabPadding">
                <Chart />
              </p>
            </div>
            <div id="buy" className="tab-pane fade">
              <p className="tabPadding">
                <BuySell />
              </p>
            </div>
            <div id="lex" className="tab-pane fade">
              <p className="tabPadding">
                <Lex />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniNav;
