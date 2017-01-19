import {RECEIVE_CITY, RECEIVE_CITIES} from '../actions/city_actions';
import merge from 'lodash/merge';

const defaultState = {
  all: [],
  currentCity: {
    events: [],
    hosts: []
  }
};

const citiesReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CITIES:
      newState.all = action.cities;
      return newState;
    case RECEIVE_CITY:
      newState.currentCity = action.city;
      return newState;
    default:
      return oldState;
  }
};


export default citiesReducer;
