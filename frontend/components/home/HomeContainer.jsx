import {connect} from 'react-redux';
import Home from './Home.jsx';

const mapStateToProps = ({session}) => {
  const signedIn = Boolean(session.currentUser);
  let userCity = "";
  if (signedIn) {
    userCity = session.currentUser.city_id;
  }
  return {
    signedIn: signedIn,
    userCity: userCity
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
