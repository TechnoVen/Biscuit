import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

export default class App extends React.Component {
  constructor() {
    super();
  }

  signout = () => {
    this.props.signout();
  }

  render() {
    return (
      <main className="app-container">
        <Header />
        <h2>Homepage!</h2>
        <div className="logout-button" onClick={this.signout}>Sign out</div>
      </main>
    );
  }
}
