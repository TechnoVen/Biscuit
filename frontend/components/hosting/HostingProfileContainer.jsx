import {connect} from 'react-redux';
import HostingProfile from './HostingProfile';
import {updateProfile} from '../../actions/host_actions';

const mapStateToProps = ({session}) => ({
  details: session.currentUser.hosting_profile.details
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (host) => dispatch(updateProfile(host))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingProfile);
