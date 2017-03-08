import React from 'react';
import {generate} from 'shortid';

export default class UserEvents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {events} = this.props.session.currentUser;
    const {handleViewEvent} = this.props;
    const mapped = Object.keys(events).map((eventId) => <Event key={generate()} handleViewEvent={handleViewEvent} event={events[eventId]}/>);

    return (
      <section className="content">
        <h2>My Events</h2>
        {mapped}
      </section>
    );
  }
}

const Event = ({event, handleViewEvent}) => {
  return (
    <div className="event-list-item" onClick={() => handleViewEvent(event)}>
      <div className="event-list-item-date">{event.date}</div>
      <div className="event-list-item-time">{event.time}</div>
      <div className="event-list-item-location">{event.location}</div>
      <div className="event-list-item-name">
        <div>
          {event.host.first_name}
        </div>
        <div>
          {event.host.last_name}
        </div>
      </div>
    </div>
  );
};
