import React, {Component} from 'react';

export default class Profile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-inner">
            <div className="profile-desc">
              <div className="profile-image">
                <img src="http://via.placeholder.com/300x300"/>
              </div>
              <div className="profile-info">
                <div className="profile-username">
                  eduhhwin
                </div>
                <div className="profile-petinfo">
                  <span className="profile-breed">Husky</span>
                  <span className="profile-dot">·</span>
                  <span className="profile-location">San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="profile-like-message">
              <button className="profile-like-button">
                <i className="fa fa-star"></i>
                <span>like</span>
              </button>
              <button className="profile-message-button">message</button>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-main">
            MAIN CONTENT GOES HERE
          </div>
          <div className="profile-sidebar">
            SIDEBAR CONTENT GOES HERE
          </div>
        </div>
      </div>
    );
  }
}
