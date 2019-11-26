import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Films from '../containers/Films';

const mapStateToProps = (state) => {
  return {
    films: selectors.getAllFilms(state),
    isLoading: selectors.isLoadingFilms(state),
    total: selectors.getTotalFilms(state),
    nextPage: selectors.getFilmsNextPage(state),
    prevPage: selectors.getFilmsPreviousPage(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByName: (name) => dispatch(operations.searchFilms(name)),
    loadMore: (url) => dispatch(operations.fetchFilms(url)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);