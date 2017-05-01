import React from 'react';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppContainer from './app/AppContainer';
import SessionContainer from './session/SessionContainer';

const Root = ({store}) => {
  const _requireAuth = (nextState, replace) => {
    const currentUser = store
      .getState()
      .session
      .currentUser;
    if (!currentUser) {
      replace('/session');
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

  const emptyDiv = () => (
    <div></div>
  );

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={AppContainer}>
          <Route path="/session" components={SessionContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
