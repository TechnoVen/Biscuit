import React from 'react';
import { Link } from 'react-router';
import HeaderNavLinks from './HeaderNavLinks';
import {BiscuitLogo, BiscuitLogoColor1, BiscuitLogoColor2} from '../../svg/svg_graphics';

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
          <BiscuitLogoColor1
            height="50px"
            width="50px"
          />
        <BiscuitLogoColor2
            height="50px"
            width="50px"
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
