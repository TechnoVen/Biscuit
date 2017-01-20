import React from 'react';
import {Link} from 'react-router';

const CitySetHome = ({updateUserCity, signedIn, cityId, userCity, myCity}) => {
  const cities = {
    1: 'bay area / sf',
    2: 'los angeles',
    3: 'new york',
    4: 'chicago',
    5: 'philadelphia',
    6: 'san diego',
  };

  const validateCity = myCity ? '' : 'You must set this as your home city first!';

  if (signedIn) {
    if (userCity === cityId) {
      return (
        <div className="city-set-home">
          <h2>This is currently your home city</h2>
          <div>
            You are free to join any event in this city. If you want to change or
            view any other cities and their events, click on the button below.
          </div>
          <Link to="/cities">
            <button>Set a different home city</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="city-set-home">
          <h2>Set your new home city below</h2>
          <div>
            You cannot join any events that are not in your home city.
            Click below to set this as your home city soyou can join biscuit
            meets here.
          </div>
          <div className="city-attendance-validation">
            {validateCity}
          </div>
          <button onClick={updateUserCity}>
            {`Set ${cities[cityId]} as my home city`}
          </button>
        </div>
      );
    }
  }

  return (
    <div className="city-set-home">
    </div>
  );
};

export default CitySetHome;
