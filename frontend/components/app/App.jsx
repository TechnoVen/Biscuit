import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MatchListingsContainer from '../matches/MatchListingsContainer';


const App = ({signout, currentUser}) => {
    return (
      <main className="app-container">
        <Header signout={signout} currentUser={currentUser} />
        <div>
          <h2 className="main-page-header">Biscuit Join events and meet new friends, not strangers.</h2>
        </div>
        <MatchListingsContainer/>
        <Footer/>
      </main>
    );
};

export default App;
