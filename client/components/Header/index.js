import React, { Component } from 'react';

import './index.css';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default navbar-fixed-top">
        <div className="navbar-header">
          <a className="navbar-brand">CoinMark</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="userIcon">
            <a className="glyphicon glyphicon-user" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
