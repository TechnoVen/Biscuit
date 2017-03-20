import React from 'react';
import {Link} from 'react-router';
import {generate} from 'shortid';


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
        <h2>Browse cities for Biscuit meets</h2>
        <div>
          {renderCityCards}
        </div>
        {children}
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
