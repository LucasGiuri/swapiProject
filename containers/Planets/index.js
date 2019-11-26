import PropTypes from 'prop-types';
import * as operations from '../../store/operations';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination/Pagination';
import InputSearch from '../../components/InputSearch/InputSearch';
import { Fragment } from 'react';

const Planets = ({planets, total, isLoading, nextPage, prevPage, searchByName, loadMore}) => {
  const totalPlanets = `Total planets: ${total}`;
  const section = "PLANETS";
  const sectionName = "planet";
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
      <InputSearch placeholder="Search a planet !" onSearch={onSearch} onReset={onReset} />
      {isLoading ?
        <Title text={loading} isBold={true} centered={true} /> :
        <Fragment>
          <List list={planets} section={sectionName} filterBy={section} />
          <Pagination 
            totalPages={totalPlanets}
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

Planets.propTypes = {
  planets: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Planets.defaultProps = {
  total: 1,
  nextPage: '',
  prevPage: ''
};

Planets.getInitialProps = async ({store}) => {
  await store.dispatch(operations.fetchPlanets());
  return {};
};

export default Planets;