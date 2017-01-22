import React from 'react';
import {generate} from 'shortid';
import {filterCurrentEvents} from '../../util/event_api_util';
import EventCard from '../EventCard';


export default class DashboardEvents extends React.Component {
  constructor() {
    super();

    this.unattendEvent = this.unattendEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
  }

  unattendEvent(id) {
    const {deleteAttendance} = this.props;
    deleteAttendance(id);
  }

  removeEvent(id) {
    const {deleteEvent} = this.props;
    deleteEvent(id);
  }

  render() {
    const {events, userId} = this.props;
    const renderEvents = events.map((event => {
      let eventAction = this.unattendEvent;
      if (event.host.id === userId) {
        eventAction = this.removeEvent;
      }
      return (
        <li key={`db-current-event-${generate()}`}>
          <EventCard event={event} eventAction={eventAction} userId={userId} />
        </li>
      );
    }));
    return (
      <div className="dashboard-events container">
        <h2>Upcoming Events</h2>
        <ul>
          {renderEvents}
        </ul>
      </div>
    );
  }
}
