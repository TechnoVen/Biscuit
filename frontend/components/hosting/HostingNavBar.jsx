import React from 'react';
import {Link} from 'react-router';

export default class HostingNavBar extends React.Component {
  render() {
    return (
      <div className="hosting-nav-container">
        <div className="container hosting-nav">
          <ul className="hosting-nav-links">
            <li>
              <Link to="/hosting" className="hvr-fade">hosting profile</Link>
            </li>
            <li>
              <Link to="/hosting/new" className="hvr-fade">new event</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
