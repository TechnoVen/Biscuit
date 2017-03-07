import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import AppContainer from './app/AppContainer';
import HomeContainer from './home/HomeContainer';

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
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute onEnter={_requireAuth} />
          <Route path="session" components={{navbar: emptyDiv, content: HomeContainer}} onEnter={_redirectIfSignedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
