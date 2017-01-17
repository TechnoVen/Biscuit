import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import EventForm from './components/hosting/EventForm';
import moment from 'moment';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {
      currentUser: window.currentUser,
      hostProfile: null,
      events: {},
      errors: []
    }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // window.moment = moment;
  // window.store = store;

  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store}/>, main);
});
