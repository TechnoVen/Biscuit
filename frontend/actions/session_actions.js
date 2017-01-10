import * as SessionAPIUtil from '../util/session_api_util';

// string constants
export const RECEIVE_CURRENT_USER =  'RECEIVE_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';


// std actions

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const updateCurrentUser = currentUser => ({
  type: UPDATE_CURRENT_USER,
  currentUser
});

export const clearUser = () => ({
  type: CLEAR_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});


// thunks

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(() => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout()
  .then(() => dispatch(clearUser()),
  errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(() => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const update = user => dispatch => {
  return SessionAPIUtil.update(user)
    .then(currentUser => dispatch(updateCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};
