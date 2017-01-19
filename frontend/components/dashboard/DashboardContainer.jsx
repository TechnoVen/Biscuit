import {connect} from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = ({session}, ownProps) => ({
  currentUser: session.currentUser,
  pathName: ownProps.location.pathname
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);
