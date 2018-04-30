import React, { Component } from 'react';

import Accounts from '../accounts';

import './index.css';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <a className="navbar-brand">CoinMark</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="accountss">
            <Accounts />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
