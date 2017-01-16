import React from 'react';
import {Link} from 'react-router';

const HostingNavBar = () => (
  <div className="hosting-nav-container">
    <div className="container hosting-nav">
      <ul className="hosting-nav-links">
        <li>
          <Link to="/hosting/profile" className="hvr-fade">
            hosting profile
          </Link>
        </li>
        <li>
          <Link to="/hosting/new" className="hvr-fade">new event</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default HostingNavBar;
