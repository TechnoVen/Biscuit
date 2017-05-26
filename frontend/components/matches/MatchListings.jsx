import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MatchCard from './MatchCard';

class MatchListings extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchMatchListings();
  }

  render () {
    const matches = this.props.matches.map((match, i) => (
      <MatchCard key={`match-listing-${i}`} match={match} />
    ));

    return (
      <div className="match-listings-container">
        {matches}
      </div>
    );
  }
}

MatchListings.defaultProps = {
  matches: []
}

MatchListings.propTypes = {
  fetchMatchListings: PropTypes.func,
  matches: PropTypes.array
}


export default MatchListings;
