import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import People from '../containers/Characters';

const mapStateToProps = (state) => {
  return {
    characters: selectors.getAllCharacters(state),
    isLoading: selectors.isLoadingCharacters(state),
    total: selectors.getTotalCharacters(state),
    nextPage: selectors.getCharactersNextPage(state),
    prevPage: selectors.getCharactersPreviousPage(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByName: (name) => dispatch(operations.searchCharacters(name)),
    loadMore: (url) => dispatch(operations.fetchCharacters(url)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(People);