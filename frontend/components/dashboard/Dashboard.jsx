import React from 'react';
import DashboardNavBar from './DashboardNavBar';

export default class Dashboard extends React.Component {
  render() {
    const {pathName} = this.props;
    return (
      <div className="dashboard-container">
        <DashboardNavBar pathName={pathName} />
        <h1>Dashboard content goes here</h1>
        {this.props.children}
      </div>
    );
  }
}
