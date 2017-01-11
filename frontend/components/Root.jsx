import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
import SessionFormContainer from './session/SessionFormContainer.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/signin" component={SessionFormContainer}/>
        <Route path="/signup" component={SessionFormContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
