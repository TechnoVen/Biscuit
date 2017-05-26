import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import MatchListingsContainer from '../matches/MatchListingsContainer';

const App = ({signout, currentUser}) => {
    return (
      <main className="app-container">
        <Header signout={signout} currentUser={currentUser} />
        <div>
          <h2 className="main-page-header">Biscuit Join events and meet new friends, not strangers.</h2>
        </div>
        <MatchListingsContainer/>
      </main>
    );
};

export default App;
