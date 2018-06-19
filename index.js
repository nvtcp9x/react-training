import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App/App';
import initilizeStore from './store';

const store = initilizeStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
