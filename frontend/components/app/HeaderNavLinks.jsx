import React from 'react';
import { Link } from 'react-router';

const HeaderNavLinks = ({signedIn, handleSignOut}) => {
  let navLinks;
  if (signedIn) {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link to="/">bay area / sf</Link>
        </li>
        <li>
          <Link to="/">cities</Link>
        </li>
        <li>
          <Link to="/">hosting</Link>
        </li>
        <li>
          <Link to="/">dashboard</Link>
        </li>
        <li>
          <span onClick={handleSignOut}>sign out</span>
        </li>
      </ul>
    );
  } else {
    navLinks = (
      <ul className="header-nav-links">
        <li>
          <Link to="/">cities</Link>
        </li>
        <li>
          <Link to="/">hosting</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/signin">sign in</Link>
        </li>
        <li>
          <Link to="/signup">sign up</Link>
        </li>
      </ul>
    );
  }

  return navLinks;
};

export default HeaderNavLinks;
