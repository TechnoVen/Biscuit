import React from 'react';
import {filterPastEvents} from '../../util/event_api_util';

export default class DashboardHistory extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const {events} = this.props;
    const renderEvents = filterPastEvents(events).map((event => (
      <li key={`db-past-event-${event.id}`}>
        {event.date}
        {event.location}
        {event.description}
      </li>
    )));
    return (
      <div className="dashboard-events container">
        <h2>Past Events</h2>
        <ul>
          {renderEvents}
        </ul>
      </div>
    );
  }
}
