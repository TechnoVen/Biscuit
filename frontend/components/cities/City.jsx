import React from 'react';
import EventCard from '../EventCard';
import CitySetHome from './CitySetHome';
import ReactModal from 'react-modal';
import EventShow from '../EventShow';
import {generate} from 'shortid';

export default class City extends React.Component {
  constructor() {
    super();

    this.state = {
      myCity: true,
      openModal: true,
      eventShowed: null
    };

    this.updateUserCity = this.updateUserCity.bind(this);
    this.createAttendance = this.createAttendance.bind(this);
    this.showEvent = this.showEvent.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  updateUserCity() {
    const {currentCity, currentUser, updateUser} = this.props;
    const user = currentUser;
    user.city_id = currentCity.id;
    updateUser(user);
  }

  createAttendance(eventId) {
    const {currentUser, currentCity, createAttendance} = this.props;

    if (currentCity.id !== currentUser.city_id) {
      return this.setState({myCity: false});
    }

    const attendance = {
      user_id: currentUser.id,
      event_id: eventId
    };

    createAttendance(attendance);
  }

  showEvent() {
    console.log(event.target);
  }

  closeEvent() {
    this.setState({openModal: false});
  }

  render() {
    const {currentCity, signedIn, currentUser} = this.props;
    const splashStyle = {};

    if (currentCity.id) {
      splashStyle.backgroundImage = `linear-gradient(to bottom,\
        rgba(255, 210, 122, 0.7), rgba(255, 210, 122, 0.7)),\
        url('${currentCity.image_url}')`;
    }

    const renderEventCards = currentCity.events.map((event) => (
      <EventCard
        key={`city-event-${generate()}`}
        event={event}
        signedIn={signedIn}
        showEvent={this.showEvent}
      />
    ));

    return (
      <div className="city-wrapper">
        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Modal"
        >
          <EventShow
            event={this.state.eventShowed}
            closeEvent={this.closeEvent}
          />
        </ReactModal>
        <div style={splashStyle} className="city-splash">
          {currentCity.name}
        </div>
        <CitySetHome
          updateUserCity={this.updateUserCity}
          signedIn={signedIn}
          cityId={currentCity.id}
          userCity={currentUser.city_id}
          myCity={this.state.myCity}
          />
        <div className="city-events-container">
          {renderEventCards}
        </div>
      </div>
    );
  }
}
