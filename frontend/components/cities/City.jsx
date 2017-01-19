import React from 'react';
import EventCard from '../EventCard';

class City extends React.Component {
  componentDidMount() {
    const {fetchCity} = this.props;
    fetchCity();
  }

  render() {
    const {currentCity} = this.props;
    const splashStyle = {};

    if (currentCity.id) {
      splashStyle.backgroundImage = `linear-gradient(to bottom,\
        rgba(255, 210, 122, 0.7), rgba(255, 210, 122, 0.7)),\
        url('${currentCity.image_url}')`;
    }

    const renderEventCards = currentCity.events.map((event) => (
      <EventCard event={event} />
    ));

    return (
      <div className="city-wrapper">
        <div style={splashStyle} className="city-splash">
          {currentCity.name}
        </div>
        <div className="city-container">
          {renderEventCards}
        </div>
      </div>
    );
  }
}

export default City;
