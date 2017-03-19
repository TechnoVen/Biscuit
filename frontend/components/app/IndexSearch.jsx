import React from 'react';
import PlacesAutocomplete, {geocodeByPlaceId} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

export default class IndexSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      query: "San Francisco, CA",
      geolocation: {
        lat: 37.791305,
        lng: -122.3937352
      },
      bounds: {
        nw: "",
        ne: "",
        se: "",
        sw: ""
      }
    };

    this.handleMapChange = this.handleMapChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const geolocation = nextProps.geolocation;
    this.setState({geolocation});
  }

  handleMapChange({center, bounds}) {
    this.setState({bounds});
  }

  render() {
    return (
      <section className="index-search content">
        <div className="index-search-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyC6qcNk83qudrUWhS_80zHRsvlTXevjf6k',
              language: 'en'
            }}
            center={this.state.geolocation}
            defaultZoom={14}
            onChange={this.handleMapChange}
            >
            <Marker {...this.state.geolocation}/>
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}
