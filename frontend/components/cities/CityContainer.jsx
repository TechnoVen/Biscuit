import {connect} from 'react-redux';
import {fetchCity} from '../../actions/city_actions';
import City from './City';

const mapStateToProps = ({cities}) => ({
  currentCity: cities.currentCity
});

const mapDispatchToProps = (dispatch, {location}) => {
  debugger;
  return {
    fetchCity: (cityId) => dispatch(fetchCity(cityId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
