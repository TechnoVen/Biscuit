import {receiveCurrentUser} from './session_actions';
import * as HostAPIUtil from '../util/host_api_util';

export const RECEIVE_HOST_PROFILE = 'RECEIVE_HOST_PROFILE';

export const receiveHostProfile = (hostProfile) => ({
  type: UPDATE_HOST_PROFILE,
  hostProfile
});

export const updateProfile = (host) => (dispatch) => (
  HostAPIUtil.updateProfile(host)
    .then(response => dispatch(receiveHostProfile(response)))
);

export const fetchProfile = (host) => (dispatch) => (
  HostAPIUtil.fetchProfile(host)
    .then(response => dispatch(receiveHostProfile(response)))
);
