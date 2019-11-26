import { FETCH_PLANETS, GET_PLANET_INFO } from './types';
import { planetsFetch, searchPlanetsByName, getPlanet } from '../../apis/services';
import apiCall from '../apiCall';

export const fetchPlanets = (url) => {
  const URI = url ? planetsFetch(url) : planetsFetch();
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_PLANETS,
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

export const searchPlanets = (name) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_PLANETS,
      () => searchPlanetsByName(name),
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

export const getPlanetById = (id) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_PLANET_INFO,
      () => getPlanet(id),
      (response) => {
        const name = response.data.name;
        const diameter = response.data.diameter;
        const rotation = response.data.rotation_period;
        const orbital = response.data.orbital_period;
        const gravity = response.data.gravity;
        const population = response.data.population;
        const climate = response.data.climate;
        const terrain = response.data.terrain;
        const surfaceWater = response.data.surface_water;
        const residents = response.data.residents;
        const films = response.data.films;

        return {
          name,
          diameter,
          rotation,
          orbital,
          gravity,
          population,
          climate,
          terrain,
          surfaceWater,
          residents,
          films
        }
      }
    ))
  }
};