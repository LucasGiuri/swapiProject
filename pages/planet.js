import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import * as operations from '../store/operations';
import Planet from '../containers/Planets/Planet';

const mapStateToProps = (state) => {
  return {
    planet: selectors.getPlanetById(state),
    isLoading: selectors.isLoadingPlanets(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlanetById: (id) => dispatch(operations.getPlanetById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Planet);
