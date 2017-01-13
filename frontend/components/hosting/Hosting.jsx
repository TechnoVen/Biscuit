import React from 'react';
import HostingNavBar from './HostingNavBar';

export default class Hosting extends React.Component {
  render() {
    return (
      <section className="hosting-wrapper">
        <div className="hosting-container">
          <HostingNavBar />
          {this.props.children}
        </div>
      </section>
    );
  }
}
