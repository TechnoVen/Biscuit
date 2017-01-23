import React from 'react';
import EventCard from '../EventCard';
import CitySetHome from './CitySetHome';
import {generate} from 'shortid';
import {filterAttended} from '../../util/store_util';

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
    const events = filterAttended(currentCity.events, currentUser.id);

    if (currentCity.id) {
      splashStyle.backgroundImage = `linear-gradient(to bottom,\
        rgba(255, 210, 122, 0.7), rgba(255, 210, 122, 0.7)),\
        url('${currentCity.image_url}')`;
    }

    const renderEventCards = events.map((event) => (
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
