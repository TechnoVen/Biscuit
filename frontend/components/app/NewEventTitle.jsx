import React from 'react';

export default class NewEventTitle extends React.Component {
  constructor() {
    super();
  }

  handleDisplay() {
    let eventClass = "nav-newevent-title";
    switch(this.props.nav) {
      case 3:
        eventClass += " selected";
        break;
    }
    return eventClass;
  }

  render() {
    return (
      <div className={this.handleDisplay()}>
        Create a New Event
      </div>
    );
  }
}
