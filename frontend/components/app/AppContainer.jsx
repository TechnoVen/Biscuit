import {connect} from 'react-redux';
import {signout, signin} from '../../actions/session_actions';
import App from './App';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
