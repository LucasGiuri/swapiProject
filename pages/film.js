import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import * as operations from '../store/operations';
import Film from '../components/containers/Films/Film';

const mapStateToProps = (state) => {
  return {
    film: selectors.getFilmById(state),
    isLoading: selectors.isLoadingFilms(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmById: (id) => dispatch(operations.getFilmById(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
