import React from 'react';
import {getLocalTime, getWeekDay} from '../util/event_api_util';

const EventCard = ({event, profileImage}) => {
  const {date, location, description, time} = event;
  const localTime = getLocalTime(time);
  const weekDay = getWeekDay(date);
  const eventImageStyle = {
    backgroundImage: 'url(' + 'https://res.cloudinary.com/dmmcusgxy/image/upload/v1484678989/dog_rxhbvr.png' + ')'
  };

  let toggleButtonElement = <button type="button">join biscuit meet</button>;
  return (
    <div className={`event-card`}>
      <div>
        <span className="event-card-weekday">
          {weekDay}
        </span>
        <div className="event-card-date-time">
          <span>
            {date}
          </span>
          <span>
            {localTime}
          </span>
        </div>
      </div>
      <div className="event-card-location">
        {event.location}
      </div>
      <div className="event-card-profile-image" style={eventImageStyle}>
      </div>
      <span className="event-card-description">
        {event.description}
      </span>
      {toggleButtonElement}
    </div>
  );
};

export default EventCard;
