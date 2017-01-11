import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  constructor() {
    super();

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    this.props.signout()
      .then(() => this.props.router.push('/signin'));
  }

  render() {
    const {children, signedIn} = this.props;
    return (
      <div className="wrapper">
        <div className="wrapper-container">
          <Header signedIn={signedIn} handleSignOut={this.handleSignOut}/>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
