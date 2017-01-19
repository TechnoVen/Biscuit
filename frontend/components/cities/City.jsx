import React from 'react';
import EventCard from '../EventCard';
import {generate} from 'shortid';

export default class City extends React.Component {

  render() {
    const {currentCity, signedIn, currentUser} = this.props;
    const splashStyle = {};

    if (currentCity.id) {
      splashStyle.backgroundImage = `linear-gradient(to bottom,\
        rgba(255, 210, 122, 0.7), rgba(255, 210, 122, 0.7)),\
        url('${currentCity.image_url}')`;
    }

    const renderEventCards = currentCity.events.map((event) => (
      <EventCard key={`city-event-${generate()}`} event={event} />
    ));

    return (
      <div className="city-wrapper">
        <div style={splashStyle} className="city-splash">
          {currentCity.name}
        </div>
        <div className="city-events-container">
          {renderEventCards}
        </div>
      </div>
    );
  }
}
