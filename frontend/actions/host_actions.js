import * as HostAPIUtil from '../util/host_api_util';

export const RECEIVE_HOST_PROFILE = 'RECEIVE_HOST_PROFILE';

export const receiveHostProfile = (hostProfile) => ({
  type: RECEIVE_HOST_PROFILE,
  hostProfile
});

export const updateHostProfile = (host) => (dispatch) => (
  HostAPIUtil.updateHostProfile(host)
    .then(response => dispatch(receiveHostProfile(response)))
);

export const fetchHostProfile = () => (dispatch) => (
  HostAPIUtil.fetchHostProfile()
    .then(response => dispatch(receiveHostProfile(response)))
);
