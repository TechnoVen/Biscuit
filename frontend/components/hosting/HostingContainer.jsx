import {connect} from 'react-redux';

import Hosting from './Hosting';

const mapStateToProps = ({session}) => ({
  signedIn: Boolean(session.currentUser)
});

export default connect(
  mapStateToProps,
  null
)(Hosting);
