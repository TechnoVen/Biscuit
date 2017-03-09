import React from 'react';
import Moment from 'moment';
import ReactModal from 'react-modal';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/lib/scss/react-widgets.scss';
import {findEventByTitle} from '../../util/store_util';

window.Moment = Moment;

momentLocalizer(Moment);

export default class EventForm extends React.Component {
  constructor() {
    super();

    this.minDate = Moment().startOf('day').add(1, 'days');
    this.minTime = Moment(this.minDate).add(9, 'hours');
    this.maxTime = Moment(this.minTime).add(12, 'hours');

    this.state = {
      event: null,
      show: false,
      title: "",
      date: this.minDate,
      time: this.minTime,
      city: "San Francisco, CA",
      location: "",
      description: ""
    };

    this.cities = [
      'San Francisco, CA',
      'Los Angeles, CA',
      'San Diego, CA',
      'New York City, NY',
      'Chicago, IL',
      'Philadelphia, PA',
      'Sann Diego,  CA'
    ];

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePostEventForm = this.handlePostEventForm.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('#main');
  }

  componentWillReceiveProps(nextProps) {
    const event = this.eventWasReceived(nextProps.events);
    if (event) {
      this.setState({show: true, event});
    }
  }

  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({title});
  }

  handleDateChange(date, format) {
    date = Moment(date);
    this.setState({date});
  }

  handleTimeChange(time, format) {
    time = Moment(time);
    this.setState({time});
  }

  handleCityChange(city) {
    this.setState({city});
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
    let {title, time, date, city, location, description} = this.state;

    const event = {
      title: title,
      date: date.format('MMMM D, YYYY'),
      time: time.format('h:mm a'),
      city: city,
      location: location,
      description: description
    };

    this.props.createEvent(event);
  }

  handleOpenModal() {
    this.setState({show: true});
  }

  handleCloseModal() {
    this.setState({show: false});
  }

  eventWasReceived(events) {
    return findEventByTitle(events, this.state.title);
  }

  render() {
    const {
      title,
      time,
      date,
      city,
      location,
      description,
      show,
      event
    } = this.state;
    return (
      <section className="content event-form">
        <ReactModal
          isOpen={show}
          contentLabel="Successful event hosted/updated"
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              zIndex: '100'
            },
            content: {
              backgroundColor: 'blue',
            }
          }}
        >
          Event was successfully created/updated! Click to view your newly hosted Biscuit Meet!
          <button
            onClick={() => this.props.handleViewEvent(event)}
          >
            Close
          </button>
        </ReactModal>
        <div>
          <div>Event Title</div>
          <input
            type="text"
            onChange={this.handleTitleChange}
            value={title}
          />
        </div>
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
