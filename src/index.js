import React from 'react';
import { render } from 'react-dom';

import App from './App.jsx';
import Home from './partials/Home';
import Customers from './partials/Customers';
import Notes from './partials/Notes';
import NotFound from './partials/NotFound';

import { IndexRoute, Route, Router, browserHistory } from 'react-router';

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home }></IndexRoute>
      <Route path="customers" component={ Customers }></Route>
      <Route path="notes" component={ Notes }></Route>
      <Route path="*" component={ NotFound }></Route>  
    </Route>
  </Router>   
, document.getElementById("root"));