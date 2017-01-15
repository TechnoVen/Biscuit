import {connect} from 'react-redux';
import Home from './Home.jsx';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Home);
