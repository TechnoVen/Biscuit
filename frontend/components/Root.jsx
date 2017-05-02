import React from 'react';
import {Provider} from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppContainer from './app/AppContainer';
import PublicRouteContainer from './routes/PublicRouteContainer';
import SessionContainer from './session/SessionContainer';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={AppContainer} />
          <PublicRouteContainer path="/login" component={SessionContainer}/>
          <PublicRouteContainer path="/signup" component={SessionContainer}/>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
