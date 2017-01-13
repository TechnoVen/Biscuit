import {connect} from 'react-redux';
import HostingProfile from './HostingProfile';

const mapStateToProps = ({session}) => ({
  hostingProfile: session.currentUser.hosting_profile
});

export default connect(
  mapStateToProps,
  null
)(HostingProfile);
