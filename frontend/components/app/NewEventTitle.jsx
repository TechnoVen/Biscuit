import React from 'react';

export default class NewEventTitle extends React.Component {
  constructor() {
    super();
  }

  handleDisplay() {
    const {nav, mobile} = this.props;
    let eventClass = "nav-newevent-title";
    if (!mobile || nav === 3) eventClass += " selected";
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
