import React from 'react';
import SimpleSelectWrapper from './SimpleSelectWrapper';
import {days, months, years, hours} from './time_constants';
import {hashHistory} from 'react-router';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      month: "",
      day: "",
      year: "",
      time: "",
      location: "",
      description: "",
      max_guests: "",
      host_id: this.props.currentUser.hosting_profile.host_id,
      city_id: this.props.currentUser.city_id
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(time) {
    return (select) => {
      if (select !== undefined) {
        this.setState({[time]: select.value});
      }
    };
  }

  handleUpdate(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    const {month, day, year} = this.state;
    const eventDate = {date: `${month} ${day}, ${year}`};
    const newEvent = Object.assign({}, this.state, eventDate);

    console.log(newEvent);
    this.props.createEvent(newEvent)
      .then(()=> this.redirect());
  }

  redirect() {
    hashHistory.push('/');
  }

  render() {
    return (
      <div className="event-form-container">
        <div className="event-form-date">
          <SimpleSelectWrapper
            options={months}
            placeholder="Month"
            value="month"
            handleSelectChange={this.handleSelectChange}
            />
          <SimpleSelectWrapper
            options={days(this.state.month)}
            placeholder="Day"
            value="day"
            handleSelectChange={this.handleSelectChange}
            />
          <SimpleSelectWrapper
            options={years}
            placeholder="Year"
            value="year"
            handleSelectChange={this.handleSelectChange}
          />
        </div>
        <div className="event-form-time">
          <SimpleSelectWrapper
            options={hours}
            placeholder="Time"
            value="time"
            handleSelectChange={this.handleSelectChange}
          />
        </div>
        <div className="event-form-location">
          <input
            type="text"
            onChange={this.handleUpdate('location')}
            value={this.state.location}
          />
        </div>
        <div>
          <SimpleSelectWrapper
            options={['2', '3', '4', '5', '6', '7', '8']}
            placeholder="Guests"
            value="max_guests"
            handleSelectChange={this.handleSelectChange}
            defaultValue={{label: '5', value: '5'}}
          />
        </div>
        <textarea
          type="text"
          onChange={this.handleUpdate('description')}
          value={this.state.description}
        />
        <button
          type="button"
          onClick={this.handleSubmit}
        >
          Create New Event
        </button>
      </div>
    );
  }
}
