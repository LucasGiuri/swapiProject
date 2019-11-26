import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Planets from '../containers/Planets';

const mapStateToProps = (state) => {
  return {
    planets: selectors.getAllPlanets(state),
    isLoading: selectors.isLoadingPlanets(state),
    total: selectors.getTotalPlanets(state),
    nextPage: selectors.getPlanetsNextPage(state),
    prevPage: selectors.getPlanetsPreviousPage(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByName: (name) => dispatch(operations.searchPlanets(name)),
    loadMore: (url) => dispatch(operations.fetchPlanets(url)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);