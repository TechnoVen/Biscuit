import React from 'react';
import {filterCurrentEvents} from '../../util/event_api_util';

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
        {event.date}
        {event.location}
        {event.description}
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
