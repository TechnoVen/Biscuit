import React from 'react';
import {getLocalTime, getWeekDay, isPastEvent} from '../util/event_api_util';

const EventCard = ({event, eventAction, userId}) => {
  const {date, location, description, time, host_id} = event;
  const localTime = getLocalTime(time);
  const weekDay = getWeekDay(date);
  const eventImageStyle = {
    backgroundImage: 'url(' +'https://res.cloudinary.com/dmmcusgxy/image/upload/v1484678989/dog_rxhbvr.png' + ')'
  };

  let toggleButtonElement, noButtonClass = "";

  if (isPastEvent(date, time)) {
    noButtonClass = " no-event-button";
    toggleButtonElement = "";
  } else if (event.attendanceId) {
    toggleButtonElement = (
      <button
        onClick={() => eventAction(event.attendanceId)}
        type="button"
      >
        leave event
      </button>
    );
  } else if (host_id === userId) {
    toggleButtonElement = (
      <button onClick={() => eventAction(event.id)} type="button">
        remove event
      </button>
    );
  } else {
    toggleButtonElement = (
      <button onClick={() => eventAction(event.id)} type="button">
        join event
      </button>
    );
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
