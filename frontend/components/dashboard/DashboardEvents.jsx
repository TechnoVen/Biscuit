import React from 'react';
import {filterCurrentEvents} from '../../util/event_api_util';
import EventCard from '../EventCard';

export default class DashboardEvents extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const {events} = this.props;
    const renderEvents = filterCurrentEvents(events).map((event => (
      <li key={`db-current-event-${event.id}`}>
        <EventCard event={event} />
      </li>
    )));
    return (
      <div className="dashboard-events container">
        <h2>Dashboard Events</h2>
        <ul>
          {renderEvents}
        </ul>
      </div>
    );
  }
}
