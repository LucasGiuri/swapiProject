import { Fragment } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as operations from '../../../../store/operations';
import Title from '../../../UI/Title/Title';
import Item from '../../../UI/Item/Item';
import { Section } from '../../../../public/styles/global';

const Film = ({ film, isLoading, id, getFilmById }) => {
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      const urlId = router.asPath.split("/")[2];
      getFilmById(urlId);
    }
  }, [getFilmById]);

  const { title, director, producer, releaseDate, vehicles, characters, planets } = film;
  const loading = "Loading...";

  return (
    <Section>
      {isLoading ? <Title centered={true} isBold={true} text={loading} /> : 
      <Fragment>
        <Title text={"Title"} isSmall={true} />
        <Item>{title}</Item>
        <Title text={"Director"} isSmall={true} />
        <Item>{director}</Item>
        <Title text={"Producer"} isSmall={true} />
        <Item>{producer}</Item>
        <Title text={"Release date"} isSmall={true} />
        <Item>{releaseDate}</Item>
        {vehicles ? 
          <Fragment>
            <Title text={"Vehicles"} isSmall={true} />
            {vehicles.map(vehicle => <Item key={vehicle}>{vehicle}</Item>)}
          </Fragment> :
          ''
        }
        {characters ?
          <Fragment>
            <Title text={"Characters"} isSmall={true} />
            {characters.map(character => <Item key={character}>{character}</Item>)}
          </Fragment> :
          ''
        }
        {planets ?
          <Fragment>
            <Title text={"Planets"} isSmall={true} />
            {planets.map(planet => <Item key={planet}>{planet}</Item>)}
          </Fragment> :
          ''
        }
      </Fragment>
    }
    </Section>
  );
};

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    releaseDate: PropTypes.string,
    vehicles: PropTypes.array,
    planets: PropTypes.array,
    characters: PropTypes.array
  }),
  getFilmById: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  isLoading: PropTypes.bool,
};

Film.defaultProps = {
  film: {
    title: '',
    director: '',
    producer: '',
    releaseDate: '',
    vehicles: [],
    planets: [],
    characters: []
  },
  getFilmById: () => {},
  isLoading: false
};

Film.getInitialProps = async ({ store, query }) => {
  const { filmId } = query;
  filmId ? await store.dispatch(operations.getFilmById(filmId)) : '';
  return {id: filmId}
};

export default Film;
