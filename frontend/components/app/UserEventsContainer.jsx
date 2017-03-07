import {connect} from 'react-redux';
import UserEvents from './UserEvents';

const mapStateToProps = ({session}) => ({
  session: session
});

export default connect(
  mapStateToProps,
  null
)(UserEvents);
