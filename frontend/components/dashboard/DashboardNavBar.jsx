import React from 'react';
import {Link} from 'react-router';

export default class DashboardNavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: null
    };

    this.selectedNavigation = this.selectedNavigation.bind(this);
  }

  componentDidMount() {
    const {pathName} = this.props;
    this.selectedNavigation(pathName);
  }

  selectedNavigation(selected) {
    this.setState({selected});
  }

  render() {
    const {selected} = this.state;
    const activeD = selected === '/dashboard' ? 'dashboard-link-active' : '';
    const activeH = selected === '/dashboard/history' ? 'dashboard-link-active' : '';

    return (
      <div className="dashboard-nav-container">
        <div className="container dashboard-nav">
          <ul className="dashboard-nav-links">
            <li>
              <Link
                to="/dashboard"
                activeClassName={activeD}
                className={"hvr-fade"}
                onClick={() => this.selectedNavigation('/dashboard')}
                >
                current events
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/history"
                activeClassName={activeH}
                onClick={() => this.selectedNavigation('/dashboard/history')}
                className={"hvr-fade"}
              >
              history
            </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
