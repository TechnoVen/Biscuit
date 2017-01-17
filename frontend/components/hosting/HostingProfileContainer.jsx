import {connect} from 'react-redux';
import HostingProfile from './HostingProfile';
import {updateHostProfile, fetchHostProfile} from '../../actions/host_actions';

const mapStateToProps = ({session}) => ({
  hostProfile: session.hostProfile
});

const mapDispatchToProps = (dispatch) => ({
  fetchHostProfile: (host) => dispatch(fetchHostProfile(host)),
  updateHostProfile: (host) => dispatch(updateHostProfile(host))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingProfile);
