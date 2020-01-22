import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Vehicles from '../components/containers/Vehicles';

const mapStateToProps = (state) => {
  return {
    vehicles: selectors.getAllVehicles(state),
    isLoading: selectors.isLoadingVehicles(state),
    total: selectors.getTotalVehicles(state),
    nextPage: selectors.getVehiclesNextPage(state),
    prevPage: selectors.getVehiclesPreviousPage(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByName: (name) => dispatch(operations.searchVehicles(name)),
    loadMore: (url) => dispatch(operations.fetchVehicles(url)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);