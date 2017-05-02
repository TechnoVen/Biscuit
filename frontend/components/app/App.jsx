import React from 'react';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
  }

  signout = () => {
    this.props.signout();
  }

  render() {
    return (
      <main className="wrapper">
        <h2>Homepage!</h2>
        <div className="logout-button" onClick={this.signout}>Sign out</div>
      </main>
    );
  }
}
