import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App.jsx';
import Home from './containers/Home';
import Customers from './containers/Customers';
import Notes from './containers/Notes';
import Note from './containers/Note';
import NotFound from './containers/NotFound';

import { IndexRoute, Route, Router, browserHistory } from 'react-router';

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }></IndexRoute>
        <Route path="/customers" component={ Customers }></Route>
        <Route path="/notes" component={ Notes }></Route>
        <Route path="/notes/:id" component={ Note }></Route>  
        <Route path="*" component={ NotFound }></Route>  
      </Route>
    </Router>
  </Provider>       
, document.getElementById("root"));