import React from 'react';

export default class DashboardLinks extends React.Component {
  constructor() {
    super();
  }

  handleDisplay() {
    let dashClass = "nav-dashboard-links";
    switch(this.props.nav) {
      case 2:
        dashClass += " selected";
        break;
    }
    return dashClass;
  }

  render() {
    return (
      <div className={this.handleDisplay()}>
        <div>My Events</div>
        <div>Profile</div>
        <div>Settings</div>
      </div>
    );
  }
}
