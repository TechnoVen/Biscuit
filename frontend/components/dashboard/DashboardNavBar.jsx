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
    const indexClass = selected === '/dashboard/' ? 'selected-link ' : "";
    const historyClass = selected === '/dashboard/history' ? 'selected-link ' : "";
    return (
      <div className="dashboard-nav-container">
        <div className="container dashboard-nav">
          <ul className="dashboard-nav-links">
            <li>
              <Link
                to="/dashboard/"
                className={indexClass + "hvr-fade"}
                onClick={() => this.selectedNavigation('/dashboard')}
                >
                current events
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/history"
                onClick={() => this.selectedNavigation('/dashboard/history')}
                className={historyClass + "hvr-fade"}
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
