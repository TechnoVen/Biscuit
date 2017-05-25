import {
  RECEIVE_MATCH_LISTINGS,
} from '../actions/match_listings_actions';

// import merge from 'lodash/merge';

const MatchListingsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_MATCH_LISTINGS:
      return action.matchListings;
    default:
      return state;
  }
};

export default MatchListingsReducer;
