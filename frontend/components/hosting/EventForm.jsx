import React from 'react';
import Dropdown from './Dropdown';
import {days, months, time} from './time_constants';
import {hashHistory} from 'react-router';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Month: "",
      Day: "",
      year: "2017",
      Time: "",
      location: "",
      description: "",
      max_guests: "",
      host_id: this.props.currentUser.hosting_profile.id,
      city_id: this.props.currentUser.city_id
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectChange(listType, selection) {
    this.setState({[listType]: selection});
  }

  handleUpdate(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    const {location, description, host_id, city_id} = this.state;
    const eventDate = this.formattedDateTime();
    const newEvent = Object.assign(
      {},
      eventDate,
      {location: location},
      {description: description},
      {host_id: host_id},
      {city_id: city_id}
    );
    console.log(this.props.currentUser.hosting_profile);
    console.log(newEvent);
    // this.props.createEvent(newEvent)
    //   .then(()=> this.redirect());
  }

  formattedDateTime() {
    const {Month, Day, year, Time} = this.state;
    const timeAry = Time.split(" ");
    const period = timeAry.pop();

    if (period === 'PM' && timeAry[0] !== 12) {
      timeAry[0] = parseInt(timeAry[0]) + 12;
    } else if (period === 'AM' && parseInt(timeAry[0]) < 10) {
      timeAry[0] = 0 + timeAry[0];
    }

    return {date: `${Month} ${Day}, ${year} ${timeAry.join('')}`};
  }

  redirect() {
    hashHistory.push('/');
  }

  render() {
    const {Month, year, description, location} = this.state;
    return (
      <div className="event-form-container container">
        <h2>Host a new Biscuit meet</h2>
        <div className="event-form-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="event-form-date-time">
          <h3>Date</h3>
          <div className="event-form-dt-input">
            <Dropdown
              list={months}
              listType='Month'
              handleSelectChange={this.handleSelectChange}
              />
            <Dropdown
              list={days(this.state.month)}
              listType='Day'
              handleSelectChange={this.handleSelectChange}
              />
            <div>
              {this.state.year}
            </div>
            <Dropdown
              list={time}
              listType='Time'
              handleSelectChange={this.handleSelectChange}
              />
          </div>
        </div>
        <div className="event-form-location">
          <h3>Location</h3>
          <input
            type="text"
            onChange={this.handleUpdate('location')}
            value={this.state.location}
          />
        </div>
        <div className="event-form-description">
          <h3>Description</h3>
          <textarea
            type="text"
            onChange={this.handleUpdate('description')}
            value={this.state.description}
            />
        </div>
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
