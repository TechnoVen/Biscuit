import React from 'react';

const MatchCard = ({match}) => {
  return (
    <div className="match-card-container">
      <div className="match-card">
        <span className="match-card-image-wrapper">
          <img className="match-card-image" src={match.image_url}/>
        </span>
        <div className="match-card-desc">
          <div className="match-card-profile">
            <span className="pet-name">{match.pet_name}</span>
            <div className="pet-info">
              <span className="breed">{match.breed}</span>
              <span className="dot">·</span>
              <span className="location">San Francisco, CA</span>
            </div>
          </div>
          <div className="match-card-like">
            <button className="match-card-button-like">
              <i className="fa fa-lg fa-star"></i>
              <span>like</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
