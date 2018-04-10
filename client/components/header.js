import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">CoinMark</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
          <li clasName="navbar navbar-header">
            <a className="glyphicon glyphicon-user"></a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
