import React, { Component } from 'react';
import Chart from '../../containers/Chart';

import './index.css';

class MiniNav extends Component {
  render() {
    return (
      <div>
        <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="dashboard-tab"
              data-toggle="tab"
              href="#dashboard"
              role="tab"
              aria-controls="dashboard"
              aria-selected="true"
            >
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Buy/Sell
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="Wallet-tab"
              data-toggle="tab"
              href="#Wallet"
              role="tab"
              aria-controls="Wallet"
              aria-selected="false"
            >
              Wallet
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="chartPadding">
              <Chart />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="Wallet"
            role="tabpanel"
            aria-labelledby="Wallet-tab"
          >
            ...
          </div>
        </div>
      </div>
    );
  }
}

export default MiniNav;
