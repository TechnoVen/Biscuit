import receiveCurrentUser from './session_actions';
import * as HostAPIUtil from '../util/host_api_util';

export const UPDATE_HOST_PROFILE = 'UPDATE_HOST_PROFILE';

export const updateProfile = (host) => (dispatch) => (
  HostAPIUtil.updateProfile(host)
    .then(response => dispatch(receiveCurrentUser))
);
