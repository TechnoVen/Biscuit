import React from 'react';
import PlacesAutocomplete, {geocodeByPlaceId} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {getCurrentEvents} from '../../util/store_util';
import {generate} from 'shortid';

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

  componentDidMount() {
    const {events, fetchEvents} = this.props;
    if (Object.keys(this.props.events).length === 0) {
      fetchEvents();
    }
  }

  componentWillReceiveProps(nextProps) {
    const geolocation = nextProps.geolocation;
    this.setState({geolocation});
  }

  handleMapChange({center, bounds}) {
    this.setState({bounds});
  }

  render() {
    const {events} = this.props;
    const eventMarkers = getCurrentEvents(events).map((event) => (
      <Marker key={generate()} lat={event.lat} lng={event.lng} />
    ));

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
            {eventMarkers}
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}
