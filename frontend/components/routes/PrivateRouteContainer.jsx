import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({session}) => ({
    user: Boolean(session.currentUser)
});

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));