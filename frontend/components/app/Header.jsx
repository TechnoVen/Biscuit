import React from 'react';
import { Link } from 'react-router';
import HeaderNavLinks from './HeaderNavLinks';
import {BiscuitLogoColor2} from '../../svg/svg_graphics';

const Header = ({signedIn, userCity, handleSignOut}) => {
  return (
    <header>
      <div className="header-container">
        <Link className="header-logo-link" to='/'>
          <div className="logo-container">
            <BiscuitLogoColor2
                height="50px"
                width="50px"
            />
            biscuit
          </div>
        </Link>
        <HeaderNavLinks
          signedIn={signedIn}
          userCity={userCity}
          handleSignOut={handleSignOut}
        />
      </div>
      <div className="header-nav-mobile">
        <HeaderNavLinks
          signedIn={signedIn}
          userCity={userCity}
          handleSignOut={handleSignOut}
        />
      </div>
    </header>
  );
};

export default Header;
