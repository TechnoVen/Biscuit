import {
  RECEIVE_CURRENT_USER,
  CLEAR_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullSession, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, _nullSession, {currentUser});
    case CLEAR_CURRENT_USER:
      return merge({}, _nullSession);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullSession, errors);
    default:
      return state;
  }
};

export default SessionReducer;
