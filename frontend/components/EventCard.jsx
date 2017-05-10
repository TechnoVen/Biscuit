import React from 'react';
import {hashHistory} from 'react-router';
import {getLocalTime, getWeekDay, isPastEvent} from '../util/event_api_util';

const EventCard = ({event, showEvent, userId, signedIn}) => {
  const {date, location, description, time, host_id} = event;
  const localTime = getLocalTime(time);
  const weekDay = getWeekDay(date);
  const eventImageStyle = {
    backgroundImage: `url('${event.host_image}')`
  };

  let toggleButtonElement, noButtonClass = "";

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
      <button onClick={() => console.log(event)} type="button">
        Show Event
      </button>
    </div>
  );
};

export default EventCard;
