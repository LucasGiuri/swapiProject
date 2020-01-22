import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import * as operations from '../store/operations';
import Vehicle from '../components/containers/Vehicles/Vehicle';

const mapStateToProps = (state) => {
  return {
    vehicle: selectors.getVehicleById(state),
    isLoading: selectors.isLoadingVehicles(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVehicleById: (id) => dispatch(operations.getVehicleById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
