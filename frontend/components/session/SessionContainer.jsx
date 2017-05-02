import {connect} from 'react-redux';
import { signin, signup, clearErrors } from '../../actions/session_actions';
import Session from './Session.jsx';

const mapDispatchToProps = (dispatch, location) => {
  const processForm = location.path === '/login' ? signin : signup;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(null, mapDispatchToProps)(Session);
