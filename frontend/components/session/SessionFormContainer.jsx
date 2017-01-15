import { connect } from 'react-redux';
import { signin, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signup;
  const demo = {
    email: 'guest_user@kibblewstrangers.com',
    password: "guest_kibble"
  };
  return {
    processForm: (user) => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    enterDemoAccount: () => dispatch(signin(demo)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
