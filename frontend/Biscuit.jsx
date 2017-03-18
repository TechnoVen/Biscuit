import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import {signout} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: Object.assign({}, {events: {}}, window.currentUser),
        errors: []
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.signout = signout;

  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store}/>, main);
});
