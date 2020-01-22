import { Fragment } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import * as operations from '../../../../store/operations';
import Title from '../../../UI/Title/Title';
import Item from '../../../UI/Item/Item';
import { Section } from '../../../../public/styles/global';

const Character = ({ character, isLoading, id, getCharacterById }) => {
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      const urlId = router.asPath.split("/")[2];
      getCharacterById(urlId);
    }
  }, [getCharacterById]);

  const { name, height, mass, hairColor, skinColor, eyeColor, 
          birthYear, gender, homeworld, films, vehicles } = character;

  const loading = "Loading...";

  return (
    <Section>
      {isLoading ? <Title centered={true} isBold={true} text={loading} /> : 
      <Fragment>
        <Title text={"Name"} isSmall={true} />
        <Item>{name}</Item>
        <Title text={"Height"} isSmall={true} />
        <Item>{height}</Item>
        <Title text={"Mass"} isSmall={true} />
        <Item>{mass}</Item>
        <Title text={"Hair color"} isSmall={true} />
        <Item>{hairColor}</Item>
        <Title text={"Skin color"} isSmall={true} />
        <Item>{skinColor}</Item>
        <Title text={"Eye color"} isSmall={true} />
        <Item>{eyeColor}</Item>
        <Title text={"Birthday year"} isSmall={true} />
        <Item>{birthYear}</Item>
        <Title text={"Gender"} isSmall={true} />
        <Item>{gender}</Item>
        <Title text={"Homeworld"} isSmall={true} />
        <Item>{homeworld}</Item>
        {films ?
          <Fragment>
            <Title text={"Films"} isSmall={true} />
            {films.map(film => <Item key={film}>{film}</Item>)}
          </Fragment> :
          ''
        }
        {vehicles ?
            <Fragment>
              <Title text={"Vehicles"} isSmall={true} />
              {vehicles.map(vehicle => <Item key={vehicle}>{vehicle}</Item>)}
            </Fragment> :
            ''
        }
      </Fragment>
    }
    </Section>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hairColor: PropTypes.string,
    skinColor: PropTypes.string,
    eyeColor: PropTypes.string,
    birthYear: PropTypes.string,
    gender: PropTypes.string,
    homeworld: PropTypes.string,
    films: PropTypes.array,
    vehicles: PropTypes.array,
  }),
  getCharacterById: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  isLoading: PropTypes.bool,
};

Character.defaultProps = {
  character: {
    name: '',
    height: '',
    mass: '',
    hairColor: '',
    skinColor: '',
    eyeColor: '',
    birthYear: '',
    gender: '',
    homeworld: '',
    films: '',
    vehicles: ''
  },
  getCharacterById: () => {},
  isLoading: false
};

Character.getInitialProps = async ({ store, query }) => {
  const { characterId } = query;
  characterId ? await store.dispatch(operations.getCharacterById(characterId)) : '';
  return {id: characterId}
};

export default Character;
