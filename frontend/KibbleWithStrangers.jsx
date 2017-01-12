import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import EventForm from './components/hosting/EventForm';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const main = document.getElementById('main');
  // ReactDOM.render(<Root store={store}/>, main);
  ReactDOM.render(<EventForm/>, main);
});
