import {connect} from 'react-redux';
import {fetchEvents} from '../../actions/event_actions';
import DashboardHistory from './DashboardHistory';

const mapStateToProps = ({session}) => {
  const signedIn = Boolean(session.currentUser);
  return {
    events: session.events.past,
    signedIn: signedIn
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHistory);
