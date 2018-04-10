import React, { Component } from 'react';

class MainNav extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <ul className="nav nav-tabs nav-justified">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Buy/Sell</a>
          </li>
          <li>
            <a>Wallet</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
