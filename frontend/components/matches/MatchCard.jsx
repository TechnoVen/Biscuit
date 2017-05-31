import React, {Component} from 'react';

class MatchCard extends Component {
  constructor() {
    super();

    this.state = {
      hover: false
    };
  }

  toggleHoverClasses = () => {
    this.setState((prevState) => {
      return {hover: !prevState.hover};
    });
  }

  render () {
    const {match} = this.props;
    const {hover} = this.state;
    return (
      <div className="match-card-container"
        onMouseEnter={this.toggleHoverClasses}
        onMouseLeave={this.toggleHoverClasses}>
        <div className="match-card">
          <span
            className={'match-card-image-wrapper' + (hover ? ' hover-mciw' : '')}>
            <img
              className={"match-card-image" + (hover ? ' hover-mci' : '')}
              src={match.image_url}/>
          </span>
          <div className="match-card-desc">
            <div className={'match-card-profile' + (hover ? ' hover-mcp' : '')}>
              <span className="pet-name">{match.pet_name}</span>
              <div className="pet-info">
                <span className="breed">{match.breed}</span>
                <span className="dot">·</span>
                <span className="location">San Francisco, CA</span>
              </div>
            </div>
            <div className="match-card-like">
              <button className="match-card-button-like">
                <i className="fa fa-star"></i>
                <span>like</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchCard;
