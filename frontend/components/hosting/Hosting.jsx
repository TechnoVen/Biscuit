import React from 'react';
import HostingNavBar from './HostingNavBar';

const Hosting = ({signedIn, children}) => {
  const renderNavBar = signedIn ? <HostingNavBar /> : "";
  return (
    <section className="hosting-wrapper">
      {renderNavBar}
      {children}
    </section>
  );
};

export default Hosting;
