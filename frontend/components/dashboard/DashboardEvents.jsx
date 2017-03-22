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

  componentDidMount() {
    const {fetchEvents} = this.props;
    fetchEvents();
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
    const {events, userId, signedIn} = this.props;
    const renderEvents = events.map((event => {
      let eventAction = this.unattendEvent;
      if (event.host_id === userId) {
        eventAction = this.removeEvent;
      }
      return (
        <EventCard
          key={`dashboard-event-${generate()}`}
          event={event}
          eventAction={eventAction}
          userId={userId}
          signedIn={signedIn}
        />
      );
    }));
    return (
      <div className="dashboard-wrapper container">
        <h2>Upcoming Events</h2>
        <div className="dashboard-events-container">
          {renderEvents}
        </div>
      </div>
    );
  }
}
