import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line no-undef
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
registerServiceWorker();
