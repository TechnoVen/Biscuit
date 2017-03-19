import {
  RECEIVE_CURRENT_USER,
  CLEAR_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';
import {RECEIVE_EVENT, REMOVE_EVENT} from '../actions/event_actions';


import merge from 'lodash/merge';

const _nullSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, _nullSession, {currentUser}, {currentUser: {events:{}}});
    case CLEAR_CURRENT_USER:
      return merge({}, _nullSession);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullSession, errors);
    case CLEAR_ERRORS:
      return merge ({}, state, {errors: []});
    case RECEIVE_EVENT:
      const event = action.event;
      newState.currentUser.events[event.id] = event;
      return newState;
    case REMOVE_EVENT:
      delete newState.currentUser.events[action.event.id];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
