import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
});

export const createEvent = (event) => (dispatch) => (
  EventAPIUtil.createEvent(event)
    .then(response => console.log(response))
);

export const updateEvent = (event) => (dispatch) => (
  EventAPIUtil.updateEvent(event)
    .then(response => dispatch(receiveEvent(response)))
);

export const fetchEvents = (eventId) => (dispatch) => (
  EventAPIUtil.fetchEvent(eventId)
    .then(response => dispatch(receiveEvent(response)))
);

export const deleteEvent = (eventId) => (dispatch) => (
  EventAPIUtil.deleteEvent(eventId)
    .then(response => dispatch(removeEvent(response)))
);
