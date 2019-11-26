import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import Vehicle from '../containers/Vehicles/Vehicle';

const mapStateToProps = (state) => {
  return {
    vehicle: selectors.getVehicleById(state),
    isLoading: selectors.isLoadingVehicles(state)
  }
};

export default connect(mapStateToProps, null)(Vehicle);
