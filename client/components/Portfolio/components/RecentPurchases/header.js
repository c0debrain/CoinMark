import React, { Component } from 'react';

import './index.css';

class RecentHeader extends Component {
  render() {
    function highlight(e){
      document.getElementById('purchasesheader').style.backgroundColor = '#4b00b0';
    }
    
    function unhighlight(e){
      document.getElementById('purchasesheader').style.backgroundColor = '#4b0082';
    }
    return (
      <div>
        <h1 id='purchasesheader' onMouseEnter={highlight} onMouseOut={unhighlight} className="headersport" tabIndex='8' role='button'>Recent Purchases</h1>
      </div>
    );
  }
}

export default RecentHeader;
