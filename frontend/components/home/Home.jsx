import React from 'react';
import {Link} from 'react-router';

const Home = () => (
  <div className="home-container">
    <div className="home-splash">
      <h1>Fact: Pets make people smile.</h1>
      <span>
        They also ruin your furniture unless you take them outside to play.
      </span>
      <Link to="/signup">
        <button className="hvr-fade">join a play date</button>
      </Link>
    </div>
  </div>
);

export default Home;
