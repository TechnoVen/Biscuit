import React from 'react';
import {Link} from 'react-router';

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

export default CityCard;
