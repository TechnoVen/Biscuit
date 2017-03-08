import React from 'react';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/lib/scss/react-widgets.scss';

momentLocalizer(Moment);

export default class EventForm extends React.Component {
  constructor() {
    super();

    this.minDate = Moment().startOf('day').add(1, 'days');
    this.minTime = Moment(this.minDate).add(9, 'hours');
    this.maxTime = Moment(this.minTime).add(12, 'hours');

    this.state = {
      date: this.minDate,
      time: this.minTime,
      location: "",
      description: ""
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePostEventForm = this.handlePostEventForm.bind(this);
  }

  handleDateChange(date, format) {
    date = Moment(date);
    this.setState({date});
  }
  handleTimeChange(time, format) {
    time = Moment(time);
    this.setState({time});
  }
  handleLocationChange(e) {
    const location = e.target.value;
    this.setState({location});
  }
  handleDescriptionChange(e) {
    const description = e.target.value;
    this.setState({description});
  }
  handlePostEventForm() {
    let {time, date, location, description} = this.state;

    const event = {
      date: date.format('MMMM D, YYYY'),
      time: time.format('h:mm a'),
      location: location,
      description: description
    };

    console.log(event);
  }

  render() {
    const {time, date, location, description} = this.state;
    return (
      <section className="content event-form">
        <div>
          <div>Date</div>
          <DateTimePicker
            value={date.toDate()}
            onChange={this.handleDateChange}
            format="MMMM D, YYYY"
            time={false}
            min={this.minDate.toDate()}
            />
        </div>
        <div>
          <div>Time</div>
          <DateTimePicker
            value={time.toDate()}
            onChange={this.handleTimeChange}
            step={30}
            format="h:mm a"
            calendar={false}
            min={this.minTime.toDate()}
            max={this.maxTime.toDate()}
            />
        </div>
        <div>
          <div>Location</div>
          <input
            type='text'
            onChange={this.handleLocationChange}
            value={location}
          />
        </div>
        <div>
          <div>Description</div>
          <textarea
            onChange={this.handleDescriptionChange}
            value={description}
          />
        </div>
        <button onClick={this.handlePostEventForm}>Host this Biscuit!</button>
      </section>
    );
  }
}
