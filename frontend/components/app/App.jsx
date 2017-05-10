import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const App = ({signout, currentUser}) => {
    return (
      <main className="app-container">
        <Header signout={signout} currentUser={currentUser} />
        <h2>Homepage!</h2>
      </main>
    );
};

export default App;
