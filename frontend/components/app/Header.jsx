import React from 'react';
import { Link } from 'react-router';
import HeaderNavLinks from './HeaderNavLinks';
import {BiscuitLogoColor2} from '../../svg/svg_graphics';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };

    this.showNavLinks = this.showNavLinks.bind(this);
  }

  showNavLinks() {
    const show = !this.state.show;
    this.setState({show});
  }

  render() {
    const {signedIn, userCity, handleSignOut} = this.props;
    const showMobileClass = this.state.show ? "header-nav-mobile mobile-nav" : "header-nav-mobile";
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
          <div className="hide-nav">
            <HeaderNavLinks
              signedIn={signedIn}
              userCity={userCity}
              handleSignOut={handleSignOut}
              />
          </div>
          <div onClick={this.showNavLinks} className="nav-icon-bars">
            <i className="fa fa-2x fa-bars"></i>
          </div>
        </div>
        <div className={showMobileClass}>
          <HeaderNavLinks
            signedIn={signedIn}
            userCity={userCity}
            handleSignOut={handleSignOut}
            />
        </div>
      </header>
    );
  }
}
