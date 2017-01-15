import React from 'react';
import {hashHistory} from 'react-router';

export default class Home extends React.Component {
  constructor() {
    super();

    this.handleSplashButton = this.handleSplashButton.bind(this);
  }

  handleSplashButton() {
    hashHistory.push('/signup');
  }

  render() {

    return (
      <div className="home-container">
        <div className="home-splash">
          <h1>Fact: Pets make people smile.</h1>
          <span>
            They also ruin your furniture unless you take them outside to play.
          </span>
          <button onClick={this.handleSplashButton} className="hvr-fade">
            join a play date
          </button>
        </div>
      </div>
    );
  }
}
