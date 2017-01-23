import React from 'react';
import {generate} from 'shortid';
import CityCard from './CityCard';


export default class Cities extends React.Component {
  componentDidMount() {
    const {fetchCities} = this.props;
    fetchCities();
  }

  render() {
    const {all, children} = this.props;
    const renderCityCards = all.map((city) => (
      <CityCard key={`city-key-${generate()}`} city={city} />
    ));
    return (
      <div className="cities-container container">
        <h2>Set your home city</h2>
        <div>
          {renderCityCards}
        </div>
        {children}
      </div>
    );
  }
}
