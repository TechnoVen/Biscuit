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
      <div className="cities-container">
        <h2>Set your home city</h2>
        <ul>
          {renderCityCards}
        </ul>
      </div>
    );
  }
}


const CityCard = ({city}) => {
  const cardStyle = {
    backgroundImage: `url('${city.image_url}')`
  };
  return (
    <li style={cardStyle}>
      <Link to={`/cities/${city.id}`}>
        {name}
      </Link>
    </li>
  );
};
