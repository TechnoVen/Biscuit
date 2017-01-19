import {connect} from 'react-redux';
import {signout, signin} from '../../actions/session_actions';
import App from './App';

const mapStateToProps = ({session}) => {
  const signedIn = Boolean(session.currentUser);
  let userCity;
  if (signedIn) {
    userCity = session.currentUser.city_id;
  }
  return {
    signedIn: signedIn,
    userCity: userCity
  };
};

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
