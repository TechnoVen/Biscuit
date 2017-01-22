import * as UserAPIUtil from '../util/user_api_util';
import {receiveCurrentUser} from './session_actions';

export const fetchUser = (id) => (dispatch) => (
  UserAPIUtil.fetchUser(id)
    .then(response => dispatch(receiveCurrentUser(response)))
);

export const updateUser = (user) => (dispatch) => (
  UserAPIUtil.updateUser(user)
    .then(response => dispatch(receiveCurrentUser(response)))
);
