import React from 'react';
import { Link } from 'react-router';

const HeaderNavLinks = ({signedIn, userCity, handleSignOut}) => {
  let navLinks;
  const cities = {
    1: 'bay area / sf',
    2: 'los angeles',
    3: 'new york',
    4: 'chicago',
    5: 'philadelphia',
    6: 'san diego',
  };

  if (signedIn) {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to={`/cities/${userCity}`}>{cities[userCity]}</Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/cities"
          >
            cities
          </Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/hosting"
          >
            hosting
          </Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/dashboard"
          >
            dashboard
          </Link>
        </li>
        <li>
          <span
            className="hvr-fade"
            onClick={handleSignOut}
          >
            sign out
          </span>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/cities"
          >
            cities
          </Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/signin"
          >
            sign in
          </Link>
        </li>
        <li>
          <Link
            activeClassName="header-active-link"
            className="hvr-fade"
            to="/signup"
          >
            sign up
          </Link>
        </li>
      </ul>
    );
  }

  return navLinks;
};

export default HeaderNavLinks;
