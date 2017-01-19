import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/event_actions';
import DashboardHistory from './DashboardHistory';

const mapStateToProps = ({session}) => ({
  events: session.events.past
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHistory);
