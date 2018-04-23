import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import './reset.css';
import './main.css';

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
