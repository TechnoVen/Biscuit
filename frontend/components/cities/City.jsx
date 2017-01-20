import React from 'react';
import EventCard from '../EventCard';
import {generate} from 'shortid';
import {Link} from 'react-router';

export default class City extends React.Component {
  constructor() {
    super();

    this.state = {
      myCity: true
    };

    this.updateUserCity = this.updateUserCity.bind(this);
    this.createAttendance = this.createAttendance.bind(this);
  }

  updateUserCity() {
    const {currentCity, currentUser, updateUser} = this.props;
    const user = currentUser;
    user.city_id = currentCity.id;
    updateUser(user);
  }

  createAttendance(eventId) {
    const {currentUser, currentCity, createAttendance} = this.props;

    if (currentCity.id !== currentUser.city_id) {
      return this.setState({myCity: false});
    }

    const attendance = {
      user_id: currentUser.id,
      event_id: eventId
    };

    createAttendance(attendance);
  }

  render() {
    const {currentCity, signedIn, currentUser} = this.props;
    const splashStyle = {};

    if (currentCity.id) {
      splashStyle.backgroundImage = `linear-gradient(to bottom,\
        rgba(255, 210, 122, 0.7), rgba(255, 210, 122, 0.7)),\
        url('${currentCity.image_url}')`;
    }

    const renderEventCards = currentCity.events.map((event) => (
      <EventCard
        key={`city-event-${generate()}`}
        event={event}
        eventAction={this.createAttendance}
      />
    ));

    return (
      <div className="city-wrapper">
        <div style={splashStyle} className="city-splash">
          {currentCity.name}
        </div>
        <CitySetHome
          updateUserCity={this.updateUserCity}
          signedIn={signedIn}
          cityId={currentCity.id}
          userCity={currentUser.city_id}
          myCity={this.state.myCity}
          />
        <div className="city-events-container">
          {renderEventCards}
        </div>
      </div>
    );
  }
}

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
