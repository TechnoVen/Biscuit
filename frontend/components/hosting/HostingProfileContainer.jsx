import {connect} from 'react-redux';
import HostingProfile from './HostingProfile';
import {updateProfile} from '../../actions/host_actions';

const mapStateToProps = ({session}) => {
  if (session.currentUser) {
    return { details: session.currentUser.hosting_profile.details };
  } else return { details: "" };
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (host) => dispatch(updateProfile(host))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingProfile);
