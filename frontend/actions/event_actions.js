import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENT';

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const createEvent = (event) => (dispatch) => (
  EventAPIUtil.createEvent(event)
    .then(response => dispatch(receiveEvents(response)))
);

export const fetchEvents = () => (dispatch) => (
  EventAPIUtil.fetchEvents()
    .then(response => dispatch(receiveEvents(response)))
);
