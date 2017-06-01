import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MatchListingsContainer from '../matches/MatchListingsContainer';
import Profile from '../profile/Profile';
import {
  Route,
} from 'react-router-dom';



const App = ({signout, currentUser}) => {
    return (
      <main className="app-container">
        <Header signout={signout} currentUser={currentUser} />
        <Route path="/matches" component={MatchListingsContainer} />
        <Route path="/profile/:profileId" component={Profile} />
        <Footer/>
      </main>
    );
};

export default App;
