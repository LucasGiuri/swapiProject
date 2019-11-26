import { FETCH_VEHICLES, GET_VEHICLE_INFO } from './types';
import { vehiclesFetch, searchVehiclesByName, getVehicle } from '../../apis/services';
import apiCall from '../apiCall';

export const fetchVehicles = (url) => {
  const URI = url ? vehiclesFetch(url) : vehiclesFetch();
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_VEHICLES,
      () => URI,
      (data) => {
        const next = data.next;
        const previous = data.previous;
        const total = data.count;
        const response = data.results;

        return {
          response,
          total,
          next,
          previous
        }
      }
    ))
  }
};

export const searchVehicles = (name) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_VEHICLES,
      () => searchVehiclesByName(name),
      (data) => {
        const next = data.next;
        const previous = data.previous;
        const total = data.count;
        const response = data.results;

        return {
          response,
          total,
          next,
          previous
        }
      }
    ))
  }
};

export const getVehicleById = (id) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_VEHICLE_INFO,
      () => getVehicle(id),
      (response) => {
        const model = response.data.id;
        const name = response.data.name;
        const vehicleClass = response.data.vehicle_class;
        const credits = response.data.cost_in_credits;
        const passengers = response.data.passengers;
        const speed = response.data.max_atmosphering_speed;
        const capacity = response.data.cargo_capacity;
        const films = response.data.films;
        const pilots = response.data.pilots;

        return {
          name,
          model,
          vehicleClass,
          credits,
          passengers,
          speed,
          capacity,
          films,
          pilots
        }
      }
    ))
  }
};