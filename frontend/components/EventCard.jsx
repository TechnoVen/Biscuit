import React from 'react';
import {getLocalTime, getWeekDay, isPastEvent} from '../util/event_api_util';

const EventCard = ({event, profileImage}) => {
  const {date, location, description, time} = event;
  const localTime = getLocalTime(time);
  const weekDay = getWeekDay(date);
  const eventImageStyle = {
    backgroundImage: 'url(' + 'https://res.cloudinary.com/dmmcusgxy/image/upload/v1484678989/dog_rxhbvr.png' + ')'
  };

  let toggleButtonElement, noButtonClass;

    if (isPastEvent(date, time)) {
      toggleButtonElement = "";
      noButtonClass = " no-event-button";
    } else {
      toggleButtonElement = <button type="button">join biscuit meet</button>;
      noButtonClass = "";
    }
  return (
    <div className={`event-card${noButtonClass}`}>
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
