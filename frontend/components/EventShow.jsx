import React, {Component} from 'react';

export default class EventShow extends Component {
  constructor() {
    super();
  }

  render() {
    const {event, closeEvent} = this.props;
    return (
      <div className="event-show-container">
        <div>
          This is the event show page
        </div>
        <button onClick={closeEvent}>Close</button>
      </div>
    );
  }
}
