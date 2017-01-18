import * as CityAPIUtil from '../util/city_api_util';

// type constants

export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';

// actions

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = (city) => ({
  type: RECEIVE_CITY,
  city
});

// thunks

export const fetchCities = () => (dispatch) => (
  CityAPIUtil.fetchCities()
    .then((response) => dispatch(receiveCities(response)))
);

export const fetchCity = (cityId) => (dispatch) => (
  CityAPIUtil.fetchCity(cityId)
    .then((response) => dispatch(receiveCity(response)))
);
