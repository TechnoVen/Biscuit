import * as UserAPIUtil from '../util/user_api_util';
import {receiveCurrentUser} from './session_actions';

export const fetchUser = (id) => (dispatch) => (
  UserAPIUtil.fetchUser(id)
    .then(response => dispatch(receiveCurrentUser(response)))
);

export const updateUser = (id) => (dispatch) => (
  UserAPIUtil.updateUser(id)
    .then(response => dispatch(receiveCurrentUser(response)))
);
