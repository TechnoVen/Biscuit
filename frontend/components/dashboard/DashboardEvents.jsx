import React from 'react';

export default class DashboardEvents extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const {events} = this.props;
    const renderEvents = Object.keys(events).map((eventId => (
      <li key={`db-current-event-${eventId}`}>
        {events[eventId].date}
        {events[eventId].location}
        {events[eventId].description}
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
