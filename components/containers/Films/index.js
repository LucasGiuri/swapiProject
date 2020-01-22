import PropTypes from 'prop-types';
import { Fragment } from 'react';
import * as operations from '../../../store/operations';
import List from '../../UI/List/List';
import Title from '../../UI/Title/Title';
import Pagination from '../../UI/Pagination/Pagination';
import InputSearch from '../../UI/InputSearch/InputSearch';

const Films = ({films, total, isLoading, nextPage, prevPage, searchByName, loadMore}) => {
  const totalFilms = `Total films: ${total}`;
  const section = "FILMS";
  const sectionName = "film";
  const loading = "Loading...";

  const onSearch = (name) => {
    searchByName(name);
  };

  const onReset = () => {
    loadMore();
  };

  const onClickPrev = () => {
    if (prevPage) {
      loadMore(prevPage);
    }
  };

  const onClickNext = () => {
    if (nextPage) {
      loadMore(nextPage);
    }
  };

  return (
    <div>
      <Title text={section} isBold={true} centered={true} />
      <InputSearch placeholder="Search a film !" onSearch={onSearch} onReset={onReset} />
      {isLoading ?
        <Title text={loading} isBold={true} centered={true} /> :
        <Fragment>
          <List list={films} section={sectionName} filterBy={section} />
          <Pagination 
            totalPages={totalFilms}
            hasPrevPage={prevPage} 
            hasNextPage={nextPage} 
            onClickPrev={onClickPrev} 
            onClickNext={onClickNext} 
          />
        </Fragment>
      }
    </div>
  )
};

Films.propTypes = {
  films: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Films.defaultProps = {
  total: 1,
  nextPage: '',
  prevPage: ''
};

Films.getInitialProps = async ({store}) => {
  await store.dispatch(operations.fetchFilms());
  return {};
};

export default Films;