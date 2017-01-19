import {connect} from 'react-redux';
import {fetchEvents, deleteEvent} from '../../actions/event_actions';
import {deleteAttendance} from '../../actions/attendance_actions';
import DashboardEvents from './DashboardEvents';

const mapStateToProps = ({session}) => ({
  events: session.events.current,
  userId: session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  deleteAttendance: (id) => dispatch(deleteAttendance(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardEvents);
