import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({component: Component, user, ...rest}) => (
    <Route {...rest} render={props => (
        user ?
            <Redirect to="/"/> :
            <Component {...rest} />
    )}/>
);

export default PublicRoute;