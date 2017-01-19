import {connect} from 'react-redux';
import {updateUser} from '../../actions/user_actions';
import {createAttendance} from '../../actions/attendance_actions';
import City from './City';

const mapStateToProps = ({session, cities}) => {
  const signedIn = Boolean(session.currentUser);
  let currentUser = {};
  if (signedIn) {
    currentUser.id = session.currentUser.id;
    currentUser.city_id= session.currentUser.city_id;
  }

  return {
    currentCity: cities.currentCity,
    signedIn: signedIn,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
    updateUser: (user) => dispatch(updateUser(user)),
    createAttendance: (attendance) => dispatch(createAttendance(attendance))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
