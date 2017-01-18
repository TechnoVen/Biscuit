import {connect} from 'react-redux';
import {fetchCities, fetchCity} from '../../actions/city_actions';
import Cities from './Cities';

const mapStateToProps = ({cities}) => ({
  all: cities.all
});

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities()),
  fetchCity: (cityId) => dispatch(fetchCity(cityId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
