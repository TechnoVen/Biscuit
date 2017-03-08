import React from 'react';
import DashboardLinks from './DashboardLinks';
import Searchbar from './Searchbar';
import NewEventTitle from './NewEventTitle';

export default class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {mobile, nav, handleNavigate, handleDashNav, handleSignOut} = this.props;

    return (
      <nav className="navigation-main">
        <div className="navigation-header">
          <div
            className="nav-logo"
            onClick={() => handleNavigate(1)}
          >
            Biscuit
          </div>
          <Searchbar nav={nav} mobile={mobile}/>
          <div
            className="nav-newevent"
            onClick={() => handleNavigate(3)}
          >
            <i className="fa fa-plus"></i>
          </div>
          <NewEventTitle nav={nav} mobile={mobile}/>
          <div
            className="nav-dashboard"
            onClick={() => handleNavigate(2)}
          >
            <i className="fa fa-bars"></i>
          </div>
          <DashboardLinks nav={nav} mobile={mobile} handleDashNav={handleDashNav} handleSignOut={handleSignOut}/>
        </div>
      </nav>
    );
  }
}
