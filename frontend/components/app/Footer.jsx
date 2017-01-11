import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">hosting</Link>
          </li>
          <li>
            <Link to="/">cities</Link>
          </li>
          <li>
            <Link to="/">facebook</Link>
          </li>
          <li>
            <Link to="/">twitter</Link>
          </li>
        </ul>
        <div className="footer-app-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          <br />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
