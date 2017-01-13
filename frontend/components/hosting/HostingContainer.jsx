import {connect} from 'react-redux';

import Hosting from './Hosting';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Hosting);
