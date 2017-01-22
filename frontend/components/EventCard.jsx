import React from 'react';
import {getLocalTime, getWeekday} from '../util/store_util';

const EventCard = ({event, eventAction, userId}) => {
  const {
    id,
    date,
    location,
    description,
    time,
    host,
    archived,
    attendanceId
  } = event;

  const localTime = getLocalTime(time);
  const weekday = getWeekday(date);
  const eventImageStyle = {
    backgroundImage: `url('${host.image_url}')`
  };

  let toggleButtonElement, noButtonClass = "";

  if (!archived) {
    noButtonClass = " no-event-button";
    toggleButtonElement = "";
  }
  else if (attendanceId) {
    toggleButtonElement = (
      <button
        onClick={() => eventAction(attendanceId)}
        type="button"
      >
        leave event
      </button>
    );
  }
  else if (host.id === userId) {
    toggleButtonElement = (
      <button onClick={() => eventAction(id)} type="button">
        remove event
      </button>
    );
  }
  else {
    toggleButtonElement = (
      <button onClick={() => eventAction(id)} type="button">
        join event
      </button>
    );
  }

  return (
    <div className={`event-card${noButtonClass}`}>
      <div>
        <span className="event-card-weekday">
          {weekday}
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
        {location}
      </div>
      <div className="event-card-profile-image" style={eventImageStyle}>
      </div>
      <span className="event-card-description">
        {description}
      </span>
      {toggleButtonElement}
    </div>
  );
};

export default EventCard;
