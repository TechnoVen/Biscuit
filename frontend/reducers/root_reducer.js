import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import EventsReducer from './events_reducer';
import MatchListingsReducer from './match_listings_reducer';

const RootReducer =  combineReducers({
  session: SessionReducer,
  events: EventsReducer,
  matchListings: MatchListingsReducer
});

export default RootReducer;
