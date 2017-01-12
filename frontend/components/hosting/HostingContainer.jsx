import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';

import Hosting from './Hosting';

const mapStateToProps = ({currentUser}) => ({
  currentUser: currentUser.host
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hosting);
