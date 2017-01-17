import React from 'react';
import {getLocalTime} from '../util/event_api_util';

const EventCard = ({event, profileImage}) => {
  // Later I have to change this to ensure that if you are attending
  // it doesn't show the button...

  // Also maybe do the archiving in the backend
  const {date, location, description, archived} = event;
  const time = getLocalTime(date);
  const dateOnly = date.slice(0, date.length - 6);

  const eventType = () => {
    if (event.archived) {
      return "";
    } else return <button type="button">join biscuit meet</button>;
  };

  return (
    <div className="event-card">
      <div className="event-card-date">
        {dateOnly}
      </div>
      <div className="event-card-time">
        {time}
      </div>
      <div className="event-card-location">
        {event.location}
      </div>
      <div className="event-card-profile-image">
        <img src="https://res.cloudinary.com/dmmcusgxy/image/upload/v1484678989/dog_rxhbvr.png" />
      </div>
      <div className="event-description">
        {event.description}
      </div>
      <div className="event-button">
        {eventType()}
      </div>
    </div>
  );
};

export default EventCard;
