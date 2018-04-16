import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
// import registerServiceWorker from './registerServiceWorker';
//
// import './reset.css';
// import './index.css';
// Meteor.startup(() => {
//   // eslint-disable-next-line no-undef
//   ReactDOM.render(<App />, document.getElementById('root'));
//   registerServiceWorker();
// });
