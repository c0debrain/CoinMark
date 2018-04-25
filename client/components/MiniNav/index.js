import React, { Component } from 'react';
import Chart from '../../containers/Chart';

import './index.css';

class MiniNav extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
              <a data-toggle="tab" href="#dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#buysell">
                Buy/Sell
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#wallet">
                Wallet
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div id="dashboard" class="tab-pane fade in active">
              <p className="chartPadding">
                <Chart />
              </p>
            </div>
            <div id="buysell" className="tab-pane fade">
              <h3>Menu 2</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="wallet" className="tab-pane fade">
              <h3>Menu 3</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniNav;
