import React from 'react';
import Moment from 'moment';
import ReactModal from 'react-modal';
import PlacesAutocomplete, {geocodeByPlaceId} from 'react-places-autocomplete';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/lib/scss/react-widgets.scss';
import {findEventByTitle, trimLocation} from '../../util/store_util';
import Marker from './Marker';
import GoogleMapReact from 'google-map-react';

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
      location: "San Francisco, CA",
      description: "",
      geolocation: {
        lat: 37.791305,
        lng: -122.3937352
      }
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePostEventForm = this.handlePostEventForm.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleAutoCompleteErrors = this.handleAutoCompleteErrors.bind(this);
    this.handleValidLocation = this.handleValidLocation.bind(this);
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

  handleLocationChange(location) {
    location = trimLocation(location);
    this.setState({location});
  }

  handleDescriptionChange(e) {
    const description = e.target.value;
    this.setState({description});
  }

  handlePostEventForm() {
    let {title, time, date, location, description, geolocation} = this.state;

    geolocation = `lat:${geolocation.lat} lng:${geolocation.lng}`;

    const event = {
      title: title,
      date: date.format('MMMM D, YYYY'),
      time: time.format('h:mm a'),
      location: location,
      geolocation: geolocation,
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

  handleAutoCompleteErrors(status) {
    return;
  }

  handleValidLocation(location, placeId) {
    location = trimLocation(location);

    geocodeByPlaceId(placeId, (error, {lat, lng}, results) => {
      const geolocation = {lat, lng};
      this.setState({geolocation, location});
    });
  }

  render() {
    const {
      title,
      time,
      date,
      location,
      description,
      show,
      event
    } = this.state;

    const options = {
      componentRestrictions: {country: "us"}
    };
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
        <div className="create-event-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyC6qcNk83qudrUWhS_80zHRsvlTXevjf6k',
              language: 'en'
            }}
            center={this.state.geolocation}
            defaultZoom={14}
          >
            <Marker {...this.state.geolocation}/>
          </GoogleMapReact>
        </div>
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
          <PlacesAutocomplete
            value={location}
            onChange={this.handleLocationChange}
            typeAhead={false}
            clearItemsOnError={false}
            onError={this.handleAutoCompleteErrors}
            options={options}
            onSelect={this.handleValidLocation}
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
