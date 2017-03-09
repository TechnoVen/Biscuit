import React from 'react';

export default class ViewEvent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {event} = this.props;
    return (
      <section className="content event-view">
        <div><img src={event.host.image_url}/></div>
        <div>{event.title}</div>
        <div>{event.host.first_name}</div>
        <div>{event.date}</div>
        <div>{event.time}</div>
        <div>{event.location}</div>
      </section>
    );
  }
}
