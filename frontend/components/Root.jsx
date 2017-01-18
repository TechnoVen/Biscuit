import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';

import AppContainer from './app/AppContainer';
import SessionFormContainer from './session/SessionFormContainer.jsx';
import HostingContainer from './hosting/HostingContainer';
import HostingProfileContainer from './hosting/HostingProfileContainer';
import EventFormContainer from './hosting/EventFormContainer';
import HomeContainer from './home/HomeContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import DashboardEventsContainer from './dashboard/DashboardEventsContainer';
import DashboardHistoryContainer from './dashboard/DashboardHistoryContainer';

const Root = ({store}) => {
  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store
      .getState()
      .session
      .currentUser;
    if (!currentUser) {
      replace('/signin');
    }
  };

  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store
      .getState()
      .session
      .currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectHostingSignedIn = (nextState, replace) => {
    const currentUser = store
      .getState()
      .session
      .currentUser;
    if (currentUser) {
      replace('/hosting/profile');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={HomeContainer}/>
          <Route path="signin" component={SessionFormContainer} onEnter={_redirectIfSignedIn}/>
          <Route path="signup" component={SessionFormContainer} onEnter={_redirectIfSignedIn}/>
          <Route path="hosting" component={HostingContainer}>
            <IndexRedirect to="profile" />
            <Route path="profile" component={HostingProfileContainer} onEnter={_ensureSignedIn}/>
            <Route path="new" component={EventFormContainer} onEnter={_ensureSignedIn}/>
          </Route>
          <Route path="dashboard" component={DashboardContainer}>
            <IndexRoute component={DashboardEventsContainer}/>
            <Route path="history" component={DashboardHistoryContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
