import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import Planet from '../containers/Planets/Planet';

const mapStateToProps = (state) => {
  return {
    planet: selectors.getPlanetById(state),
    isLoading: selectors.isLoadingPlanets(state)
  }
};

export default connect(mapStateToProps, null)(Planet);
