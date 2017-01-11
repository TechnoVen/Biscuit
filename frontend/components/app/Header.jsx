import React from 'react';
import { Link } from 'react-router';
import HeaderNavLinks from './HeaderNavLinks';

const Header = ({signedIn, handleSignOut}) => {
  return (
    <header>
      <div className="header-container">
        <Link className="header-logo" to='/'>kibble with strangers</Link>
        <HeaderNavLinks signedIn={signedIn} handleSignOut={handleSignOut}/>
      </div>
    </header>
  );
};

export default Header;
