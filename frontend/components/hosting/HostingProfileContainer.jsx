import {connect} from 'react-redux';
import HostingProfile from './HostingProfile';
import {updateUser} from '../../actions/user_actions';

const mapStateToProps = ({session}) => {
  let profile = {
    profile_1: "",
    profile_2: "",
    profile_3: ""
  };

  if (session.currentUser) {
    profile = session.currentUser.profile;
  }

  return {
    profile: profile,
    userId: session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingProfile);
