import React, {Component} from 'react';
import {BiscuitLogo} from '../../svg/svg_graphics';
const Header = ({signout, currentUser}) => {
  return (
    <div className="header-container">
        <div className="header-left">
            <BiscuitLogo width="35" height="35" strokeWidth={15} />
            <h1>Biscuit</h1>
        </div>
        <div className="header-right">
            <a href="#">Dashboard</a>
            {/*<img
              alt={`user ${currentUser.email}`}
              className="header-user-image"
              src={currentUser.image_url}
            />*/}
          <span className="header-signout" onClick={signout}>Signout</span>
        </div>
    </div>
  );
};


export default Header;
