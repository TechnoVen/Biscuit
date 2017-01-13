import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';

import EventForm from './EventForm';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
