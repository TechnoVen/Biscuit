import React from 'react';

export default class DashboardLinks extends React.Component {
  constructor() {
    super();
  }

  handleDisplay() {
    const {nav, mobile} = this.props;
    let dashboardLinksClass = "nav-dashboard-links";
    if (!mobile || nav === 2) dashboardLinksClass += " selected";
    return dashboardLinksClass;
  }

  render() {
    const {handleDashNav} = this.props;
    return (
      <div className={this.handleDisplay()}>
        <div onClick={() => handleDashNav(1)}>My Events</div>
        <div onClick={() => handleDashNav(2)}>Profile</div>
        <div onClick={() => handleDashNav(3)}>Settings</div>
      </div>
    );
  }
}
