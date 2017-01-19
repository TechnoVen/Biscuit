import React from 'react';
import {Link} from 'react-router';

const Home = ({signedIn, userCity}) => {
  let splashLink = "/signup";
  if (signedIn) {
    splashLink = `/cities/${userCity}`;
  }

  return (
    <div className="home-container">
      <div className="home-splash">
        <h1>Fact: Pets make people smile.</h1>
        <span>
          They also ruin your furniture unless you take them outside to play.
        </span>
        <Link to={splashLink}>
          <button className="hvr-fade">join a biscuit meet</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
