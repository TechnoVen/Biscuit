import * as MatchListingAPIUtil from '../util/match_listings_api_util';

export const RECEIVE_MATCH_LISTINGS = 'RECEIVE_MATCH_LISTINGS';

// action creator

export function receiveMatchListings(matchListings) {
  return {
    type: RECEIVE_MATCH_LISTINGS,
    matchListings
  };
};

//thunk

export const fetchMatchListings = (match) => (dispatch) => (
  MatchListingAPIUtil.fetchMatchListings(match)
    .then(response => dispatch(receiveMatchListings(response)))
);
