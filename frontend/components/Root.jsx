import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AppContainer from './app/AppContainer';
import SessionFormContainer from './session/SessionFormContainer.jsx';
import HostingContainer from './hosting/HostingContainer';
import HostingProfileContainer from './hosting/HostingProfileContainer';
import EventFormContainer from './hosting/EventFormContainer';
import HomeContainer from './home/HomeContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/signin" component={SessionFormContainer}/>
        <Route path="/signup" component={SessionFormContainer}/>
        <Route path="/hosting" component={HostingContainer}>
          <IndexRoute component={HostingProfileContainer}/>
          <Route path="/hosting/new" component={EventFormContainer}/>
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
