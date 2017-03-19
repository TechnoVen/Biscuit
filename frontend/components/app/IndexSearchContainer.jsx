import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/event_actions';
import IndexSearch from './IndexSearch';

const mapStateToProps = ({events}) => ({
  events: events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexSearch);
