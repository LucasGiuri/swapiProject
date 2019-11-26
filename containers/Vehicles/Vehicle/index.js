import PropTypes from 'prop-types';
import * as operations from '../../../store/operations';
import Title from '../../../components/Title/Title';
import Item from '../../../components/Item/Item';
import { Section } from '../../../static/styles/global';
import { Fragment } from 'react';

const Vehicle = ({ vehicle, isLoading }) => {
  const { name, model, vehicleClass, credits, passengers, speed, capacity, films, pilots } = vehicle;
  const loading = "Loading...";

  return (
    <Section>
      {isLoading ? <Title centered={true} isBold={true} text={loading} /> : 
      <Fragment>
        <Title text={"Name"} isSmall={true} />
        <Item>{name}</Item>
        <Title text={"Model"} isSmall={true} />
        <Item>{model}</Item>
        <Title text={"Class"} isSmall={true} />
        <Item>{vehicleClass}</Item>
        <Title text={"Credits"} isSmall={true} />
        <Item>{credits}</Item>
        <Title text={"Speed"} isSmall={true} />
        <Item>{speed}</Item>
        <Title text={"Capacity"} isSmall={true} />
        <Item>{capacity}</Item>
        <Title text={"Passengers"} isSmall={true} />
        <Item>{passengers}</Item>
        {films ? 
          <Fragment>
            <Title text={"Films"} isSmall={true} />
            {films.map(film => <Item key={film}>{film}</Item>)}
          </Fragment> :
          ''
        }
        {pilots ?
          <Fragment>
            <Title text={"Pilots"} isSmall={true} />
            {pilots.map(pilot => <Item key={pilot}>{pilot}</Item>)}
          </Fragment> :
          ''
        }
      </Fragment>
    }
    </Section>
  );
};

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string,
    model: PropTypes.string,
    vehicleClass: PropTypes.string,
    credits: PropTypes.string,
    speed: PropTypes.string,
    capacity: PropTypes.string,
    passengers: PropTypes.string,
    pilots: PropTypes.array,
    films: PropTypes.array
  }),
  isLoading: PropTypes.bool,
};

Vehicle.defaultProps = {
  vehicle: {
    name: '',
    model: '',
    vehicleClass: '',
    credits: '',
    speed: '',
    capacity: '',
    passengers: '',
    pilots: [],
    films: [],
  },
  isLoading: false
};

Vehicle.getInitialProps = async ({ store, query }) => {
  await store.dispatch(operations.getVehicleById(query.vehicleId));
  return {}
};

export default Vehicle;
