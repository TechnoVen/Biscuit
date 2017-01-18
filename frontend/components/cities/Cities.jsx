import React from 'react';
import {Link} from 'react-router';

export default class Cities extends React.Component {
  componentDidMount() {
    const {fetchCities} = this.props;
    fetchCities();
  }

  render() {
    const {all} = this.props;
    const renderCityCards = all.map((city) => (
      <CityCard key={`city-idx-${city.id}`} city={city} />
    ));
    return (
      <div className="cities-container container">
        <h2>Set your home city</h2>
        <div>
          {renderCityCards}
        </div>
      </div>
    );
  }
}


const CityCard = ({city}) => {
  const cardStyle = {
    backgroundImage: `url('${city.image_url}')`
  };
  return (
      <Link to={`/cities/${city.id}`}>
        <div style={cardStyle}>
          {city.name}
        </div>
      </Link>
  );
};
