import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';

import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const event = action.event;
      newState[event.id] = event;
      return newState;
    case REMOVE_EVENT:
      delete newState[action.event.id];
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;
