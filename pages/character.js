import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import * as operations from '../store/operations';
import Character from '../containers/Characters/Character';

const mapStateToProps = (state) => {
  return {
    character: selectors.getCharacterById(state),
    isLoading: selectors.isLoadingCharacters(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacterById: (id) => dispatch(operations.getCharacterById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
