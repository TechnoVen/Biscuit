import React from 'react';
import HostingNavBar from './HostingNavBar';
import HostingProfile from './HostingProfile';

export default class Hosting extends React.Component {
  render() {
    return (
      <section className="hosting-wrapper">
        <div className="hosting-container">
          <HostingNavBar />
          <HostingProfile />
          {this.props.children}
        </div>
      </section>
    );
  }
}
