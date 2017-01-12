import React from 'react';
import SimpleSelectWrapper from './SimpleSelectWrapper';
import {days, months, years, hours} from './time_constants';

export default class EventForm extends React.Component {
  constructor() {
    super();

    // const {host_id, city_id} = this.props.currentUser;

    this.state = {
      month: "",
      day: "",
      year: "",
      time: "",
      max_guests: 5,
      host_id: 1,
      city_id: 1
    };

    this.onTimeChange = this.onTimeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTimeChange(time) {
    return (select) => {
      if (select !== undefined) {
        this.setState({[time]: select.value});
      }
    };
  }

  onSubmit() {

  }

  render() {
    return (
      <div className="event-form-container">
        <div className="event-form-date">
          <SimpleSelectWrapper
            options={months}
            placeholder="Month"
            value="month"
            onTimeChange={this.onTimeChange}
            />
          <SimpleSelectWrapper
            options={days(this.state.month)}
            placeholder="Day"
            value="day"
            onTimeChange={this.onTimeChange}
            />
          <SimpleSelectWrapper
            options={years}
            placeholder="Year"
            value="year"
            onTimeChange={this.onTimeChange}
          />
        </div>
        <div className="event-form-time">
          <SimpleSelectWrapper
            options={hours}
            placeholder="Time"
            value="time"
            onTimeChange={this.onTimeChange}
          />
        </div>
      </div>
    );
  }
}
