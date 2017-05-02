import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'

import PublicRoute from './PublicRoute';

const mapStateToProps = ({session}) => ({
    user: Boolean(session.currentUser)
});

export default withRouter(connect(mapStateToProps, null)(PublicRoute));