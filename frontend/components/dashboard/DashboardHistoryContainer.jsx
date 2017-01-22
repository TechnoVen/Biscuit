import {connect} from 'react-redux';
import {sortByDate} from '../../util/store_util';
import DashboardHistory from './DashboardHistory';

const mapStateToProps = ({session}) => ({
  events: sortByDate(session.currentUser.past_events)
});

export default connect(
  mapStateToProps,
  null
)(DashboardHistory);
