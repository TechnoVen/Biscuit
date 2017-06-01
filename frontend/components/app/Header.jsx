import React, {Component} from 'react';
import {BiscuitLogo} from '../../svg/svg_graphics';
class Header extends Component {
  constructor() {
    super();
  }

  addStroke = (element) => {
    element.setAttribute('title', element.innerHTML)
  }

  render() {
    const {signout} = this.props;
    return (
      <div className="header-container">
        <div className="header-left">
          {/*<BiscuitLogo width="35" height="35" strokeWidth={15} />*/}
          <h1 className="single-stroke" ref={this.addStroke}>biscuit</h1>
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
  }
}


export default Header;
