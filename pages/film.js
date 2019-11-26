import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import Film from '../containers/Films/Film';

const mapStateToProps = (state) => {
  return {
    film: selectors.getFilmById(state),
    isLoading: selectors.isLoadingFilms(state)
  }
};

export default connect(mapStateToProps, null)(Film);
