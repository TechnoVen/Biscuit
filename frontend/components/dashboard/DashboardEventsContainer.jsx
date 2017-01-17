import {connect} from 'react-redux';
import fetchEvents from '../../actions/event_actions';
import DashboardEvents from './DashboardEvents';

const mapStateToProps = ({session}) => ({
  events: session.events
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardEvents);
