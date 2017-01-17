import React from 'react';
import { Link } from 'react-router';

const HeaderNavLinks = ({signedIn, handleSignOut}) => {
  let navLinks;
  if (signedIn) {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link className="hvr-fade" to="/">bay area / sf</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/">cities</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/hosting">hosting</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/dashboard">dashboard</Link>
        </li>
        <li>
          <span className="hvr-fade" onClick={handleSignOut}>sign out</span>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link className="hvr-fade" to="/">cities</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/hosting">hosting</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/">about</Link>
        </li>
        <li>
          <Link className="hvr-fade" to="/signin">sign in</Link>
        </li>
        <li>
          <Link className="hvr-fade"  to="/signup">sign up</Link>
        </li>
      </ul>
    );
  }

  return navLinks;
};

export default HeaderNavLinks;
