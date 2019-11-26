import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import Character from '../containers/Characters/Character';

const mapStateToProps = (state) => {
  return {
    character: selectors.getCharacterById(state),
    isLoading: selectors.isLoadingCharacters(state),
  }
};

export default connect(mapStateToProps, null)(Character);
