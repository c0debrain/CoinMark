import React, { Component } from 'react';

import './index.css';

class WalletHeader extends Component {
  render() {
    function highlight(e){
      document.getElementById('walletheader').style.backgroundColor = '#4b00b0';
    }
    
    function unhighlight(e){
      document.getElementById('walletheader').style.backgroundColor = '#4b0082';
    }
    return (
      <div>
        <h1 id='walletheader' onMouseEnter={highlight} onMouseOut={unhighlight} className="headersport" tabIndex='9' role='button'>Wallet</h1>
      </div>
    );
  }
}

export default WalletHeader;
