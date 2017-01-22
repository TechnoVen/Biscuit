import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

// action creator

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
});

//thunk

export const createEvent = (event) => (dispatch) => (
  EventAPIUtil.createEvent(event)
    .then(response => dispatch(receiveEvent(response)))
);

export const deleteEvent = (id) => (dispatch) => (
  EventAPIUtil.deleteEvent(id)
    .then(response => dispatch(removeEvent(response)))
);
