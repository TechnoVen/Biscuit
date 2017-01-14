import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    this.props.signout()
      .then(() => hashHistory.push('/signin'));
  }

  render() {
    const {children, signedIn} = this.props;
    return (
      <div className="wrapper">
        <Header signedIn={signedIn} handleSignOut={this.handleSignOut}/>
        <div className="content-container">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
