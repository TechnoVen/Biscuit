import {connect} from 'react-redux';
import {createEvent} from '../../actions/event_actions';

import Hosting from './Hosting';

const mapStateToProps = ({session}) => ({
  currentUser: currentUser.hosting_profile
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hosting);
