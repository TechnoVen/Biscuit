import React from 'react';
import {filterPastEvents} from '../../util/event_api_util';
import EventCard from '../EventCard.jsx';
import {generate} from 'shortid';


export default class DashboardHistory extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const {events} = this.props;
    const renderEvents = events.map((event => (
      <li key={`db-past-event-${generate()}`}>
        <EventCard event={event} />
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
