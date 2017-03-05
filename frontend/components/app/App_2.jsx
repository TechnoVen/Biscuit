import React from 'react';
import { Link, hashHistory } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const App = ({signout, signedIn, userCity, children}) => {
  const handleSignOut = () => {
    signout().then(() => hashHistory.push('/signin'));
  };

  return (
    <div className="wrapper">
      <Header
        signedIn={signedIn}
        userCity={userCity}
        handleSignOut={handleSignOut}
      />
      <div className="content-container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default App;
