import {connect} from 'react-redux';
import { signin, signup, clearErrors } from '../../actions/session_actions';
import Home from './Home.jsx';

const mapStateToProps = ({session}) => {
  const signedIn = Boolean(session.currentUser);
  return {
    signedIn: signedIn
  };
};

const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(signin(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
