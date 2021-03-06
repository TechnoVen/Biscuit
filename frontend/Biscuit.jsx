import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        hostProfile: {
          detail1: "",
          detail2: "",
          detail3: "",
          id: null
        },
        events: {
          current: [],
          past: []
        },
        errors: []
      },
      cities: {
        all: [],
        currentCity: {
          events: [],
          hosts: []
        }
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const main = document.getElementById('main');
  ReactDOM.render(<Root store={store}/>, main);
});
