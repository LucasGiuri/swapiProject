import PropTypes from 'prop-types';
import * as operations from '../../../store/operations';
import Title from '../../../components/Title/Title';
import Item from '../../../components/Item/Item';
import { Section } from '../../../static/styles/global';
import { Fragment } from 'react';

const Planet = ({ planet, isLoading }) => {
  const { name, diameter, rotation, orbital, gravity, population, 
          climate, terrain, surfaceWater, residents, films } = planet;

  const loading = "Loading...";

  return (
    <Section>
      {isLoading ? <Title centered={true} isBold={true} text={loading} /> : 
      <Fragment>
        <Title text={"Name"} isSmall={true} />
        <Item>{name}</Item>
        <Title text={"Diameter"} isSmall={true} />
        <Item>{diameter}</Item>
        <Title text={"Rotation"} isSmall={true} />
        <Item>{rotation}</Item>
        <Title text={"Gravity"} isSmall={true} />
        <Item>{gravity}</Item>
        <Title text={"Orbital"} isSmall={true} />
        <Item>{orbital}</Item>
        <Title text={"Population"} isSmall={true} />
        <Item>{population}</Item>
        <Title text={"Climate"} isSmall={true} />
        <Item>{climate}</Item>
        <Title text={"terrain"} isSmall={true} />
        <Item>{terrain}</Item>
        <Title text={"Surface Water"} isSmall={true} />
        <Item>{surfaceWater}</Item>
        {residents ?
          <Fragment>
            <Title text={"Residents"} isSmall={true} />
            {residents.map(resident => <Item key={resident}>{resident}</Item>)}
          </Fragment> :
          ''
        }
        {films ? 
          <Fragment> 
            <Title text={"Films"} isSmall={true} />
            {films.map(film => <Item key={film}>{film}</Item>)}
          </Fragment> :
          ''
        }
      </Fragment>
    }
    </Section>
  );
};

Planet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    diameter: PropTypes.string,
    rotation: PropTypes.string,
    orbital: PropTypes.string,
    gravity: PropTypes.string,
    population: PropTypes.string,
    climate: PropTypes.string,
    terrain: PropTypes.string,
    surfaceWater: PropTypes.string,
    residents: PropTypes.array,
    films: PropTypes.array
  }),
  isLoading: PropTypes.bool,
};

Planet.defaultProps = {
  planet: {
    name: '',
    diameter: '',
    rotation: '',
    orbital: '',
    gravity: '',
    population: '',
    climate: '',
    terrain: '',
    surfaceWater: '',
    residents: [],
    films: []
  },
  isLoading: false
};

Planet.getInitialProps = async ({ store, query }) => {
  await store.dispatch(operations.getPlanetById(query.planetId));
  return {}
};

export default Planet;
