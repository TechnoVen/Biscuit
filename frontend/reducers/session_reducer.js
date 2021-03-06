import {
  RECEIVE_CURRENT_USER,
  CLEAR_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';
import {RECEIVE_HOST_PROFILE} from '../actions/host_actions';
import {RECEIVE_EVENTS} from '../actions/event_actions';


import merge from 'lodash/merge';

const _nullSession = {
  currentUser: null,
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
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, _nullSession, {currentUser});
    case CLEAR_CURRENT_USER:
      return merge({}, _nullSession);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullSession, errors);
    case CLEAR_ERRORS:
      return merge ({}, state, {errors: []});
    case RECEIVE_HOST_PROFILE:
      newState.hostProfile = action.hostProfile;
      return newState;
    case RECEIVE_EVENTS:
      newState.events = action.events;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
