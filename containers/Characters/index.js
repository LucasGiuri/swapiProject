import PropTypes from 'prop-types';
import * as operations from '../../store/operations';
import List from '../../components/List/List';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination/Pagination';
import InputSearch from '../../components/InputSearch/InputSearch';
import { Fragment } from 'react';

const Characters = ({characters, total, isLoading, nextPage, prevPage, searchByName, loadMore}) => {
  const totalCharacters = `Total characters: ${total}`;
  const section = "PEOPLE";
  const sectionName = "character";
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
    <Fragment>
      <Title text={section} isBold={true} centered={true} />
      <InputSearch placeholder="Search a character !" onSearch={onSearch} onReset={onReset} />
      {isLoading ? 
        <Title text={loading} isBold={true} centered={true} /> : 
        <Fragment>
          <List list={characters} section={sectionName} filterBy={section} />
          <Pagination 
            totalPages={totalCharacters}
            hasPrevPage={prevPage} 
            hasNextPage={nextPage} 
            onClickPrev={onClickPrev} 
            onClickNext={onClickNext} 
          />
        </Fragment>
      }
    </Fragment>
  )
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  total: PropTypes.number,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
  searchByName: PropTypes.func.isRequired,
};

Characters.defaultProps = {
  total: 1,
  nextPage: '',
  prevPage: ''
};

Characters.getInitialProps = async ({store}) => {
  await store.dispatch(operations.fetchCharacters());
  return {};
};

export default Characters;