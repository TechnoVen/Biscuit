import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import AppContainer from './app/AppContainer';
import SessionFormContainer from './session/SessionFormContainer.jsx';
import HostingContainer from './hosting/HostingContainer';
import HostingProfileContainer from './hosting/HostingProfileContainer';
import HostingInfo from './hosting/HostingInfo';
import EventFormContainer from './hosting/EventFormContainer';
import HomeContainer from './home/HomeContainer';

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
            <IndexRoute component={HostingInfo} onEnter={_redirectHostingSignedIn}/>
            <Route path="profile" component={HostingProfileContainer} onEnter={_ensureSignedIn}/>
            <Route path="new" component={EventFormContainer} onEnter={_ensureSignedIn}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
