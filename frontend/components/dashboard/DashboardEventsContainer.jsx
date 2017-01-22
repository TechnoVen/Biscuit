import {connect} from 'react-redux';
import {deleteEvent} from '../../actions/event_actions';
import {deleteAttendance} from '../../actions/attendance_actions';
import {sortByDate} from '../../util/store_util';
import DashboardEvents from './DashboardEvents';

const mapStateToProps = ({session}) => ({
  events: sortByDate(session.currentUser.current_events),
  userId: session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  deleteAttendance: (id) => dispatch(deleteAttendance(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardEvents);
