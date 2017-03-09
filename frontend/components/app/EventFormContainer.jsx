import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';
import EventForm from './EventForm';
import {sortByDate, getCurrentEvents} from '../../util/store_util';

const mapStateToProps = ({session}) => ({
  events: getCurrentEvents(session.currentUser.events)
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
