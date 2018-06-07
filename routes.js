import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import About from './containers/About';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
