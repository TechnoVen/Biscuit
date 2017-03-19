import React from 'react';
import PlacesAutocomplete, {geocodeByPlaceId} from 'react-places-autocomplete';
import {trimLocation} from '../../util/store_util';

export default class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "San Francisco, CA"
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidLocation = this.handleValidLocation.bind(this);
    this.handleAutoCompleteErrors = this.handleAutoCompleteErrors.bind(this);
  }

  handleSearch(query) {
    query = trimLocation(query);
    this.setState({query});
  }

  handleSubmit() {
    event.preventDefault();
  }

  handleDisplay() {
    const {nav, mobile} = this.props;
    let searchClass = "nav-searchbar";
    if (!mobile || nav === 1) searchClass += " selected";
    return searchClass;
  }

  handleValidLocation(location, placeId) {
    geocodeByPlaceId(placeId, (error, {lat, lng}, results) => {
      const geolocation = {lat, lng};
      this.props.handleChangeGeolocation(geolocation);
    });
  }

  handleAutoCompleteErrors(status) {
    return;
  }

  render() {
    const classNames = {
      root: 'searchbar-root',
      input: 'searchbar-input'
    };
    return (
      <div className={this.handleDisplay()}>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onClick={this.handleSubmit}><i className="fa fa-search"></i></button>
          <PlacesAutocomplete
            classNames={classNames}
            value={this.state.query}
            onChange={this.handleSearch}
            onSelect={this.handleValidLocation}
            onError={this.handleAutoCompleteErrors}
          />
        </form>
      </div>
    );
  }
}
