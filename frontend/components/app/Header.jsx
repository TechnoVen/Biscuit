import React from 'react';
import { Link } from 'react-router';
import HeaderNavLinks from './HeaderNavLinks';
import {BiscuitLogo} from '../../svg/svg_graphics';

const Header = ({signedIn, handleSignOut}) => {
  return (
    <header>
      <div className="header-container">
        <Link className="header-logo-link" to='/'>
          <div className="logo-container">
            <BiscuitLogo
              viewBox="-10 -10 480 480"
              height="50px"
              width="50px"
              stroke="white"
              strokeWidth={20}
            />
            biscuit
          </div>
        </Link>
        <HeaderNavLinks signedIn={signedIn} handleSignOut={handleSignOut}/>
      </div>
    </header>
  );
};

export default Header;
