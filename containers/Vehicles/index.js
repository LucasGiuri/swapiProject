import PropTypes from 'prop-types';
import * as operations from '../../store/operations';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination/Pagination';
import InputSearch from '../../components/InputSearch/InputSearch';
import { Fragment } from 'react';

const Vehicles = ({vehicles, total, isLoading, nextPage, prevPage, searchByName, loadMore}) => {
  const totalVehicles = `Total vehicles: ${total}`;
  const section = "VEHICLES";
  const sectionName = "vehicle";
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
      <InputSearch placeholder="Search a vehicle !" onSearch={onSearch} onReset={onReset} />
      {isLoading ?
        <Title text={loading} isBold={true} centered={true} /> :
        <Fragment>
          <List list={vehicles} section={sectionName} filterBy={section} />
          <Pagination 
            totalPages={totalVehicles}
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

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Vehicles.defaultProps = {
  total: 1,
  nextPage: '',
  prevPage: ''
};

Vehicles.getInitialProps = async ({store}) => {
  await store.dispatch(operations.fetchVehicles());
  return {};
};

export default Vehicles;