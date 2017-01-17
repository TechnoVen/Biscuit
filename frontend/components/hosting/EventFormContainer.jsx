import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';

import EventForm from './EventForm';

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  null,
  mapDispatchToProps
)(EventForm);
