import React, { Component } from 'react';

import Accounts from '../accounts';

import './index.css';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default navbar-fixed-top" role='header'>
        <div className="navbar-header">
          <a className="navbar-brand">CoinMark</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="accountss" tabindex='0' role='menu'>
            <Accounts />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
