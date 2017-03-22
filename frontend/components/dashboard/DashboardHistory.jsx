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
    const {events, signedIn} = this.props;
    const renderEvents = events.map((event => (
      <EventCard
        event={event}
        signedIn={signedIn}
      />
    )));
    return (
      <div className="dashboard-wrapper container">
        <h2>Past Events</h2>
        <div className="dashboard-events-container">
          {renderEvents}
        </div>
      </div>
    );
  }
}
