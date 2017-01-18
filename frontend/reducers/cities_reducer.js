import {RECEIVE_CITY, RECEIVE_CITIES} from '../actions/city_actions';
import merge from 'lodash/merge';

const defaultState = {
  cities: [],
  currentCity: {}
};

const citiesReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CITIES:
      newState.cities = action.cities;
      return newState;
    case RECEIVE_CITY:
      newState.city = action.city;
      return newState;
    default:
      return oldState;
  }
};


export default citiesReducer;
