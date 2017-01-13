import React from 'react';
import {Link} from 'react-router';

export default class HostingNavBar extends React.Component {
  render() {
    return (
      <div className="hosting-nav">
        <ul className="hosting-nav-links">
          <Link to="/hosting">
            <li>hosting profile</li>
          </Link>
          <Link to="/hosting/new">
            <li>new event</li>
          </Link>
        </ul>
      </div>
    );
  }
}
