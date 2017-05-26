import {connect} from 'react-redux';
import MatchListings from './MatchListings';
import {fetchMatchListings} from '../../actions/match_listings_actions';

const mapStateToProps = ({matchListings}) => {
  return {
    matches: matchListings.matches
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchListings: (matchParams) => dispatch(fetchMatchListings(matchParams))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchListings)
