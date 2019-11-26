import { FETCH_CHARACTERS, GET_CHARACTER_INFO } from './types';
import { charactersFetch, searchCharactersByName, getCharacter } from '../../apis/services';
import apiCall from '../apiCall';

export const fetchCharacters = (url) => {
  const URI = url ? charactersFetch(url) : charactersFetch();
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_CHARACTERS,
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

export const searchCharacters = (name) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_CHARACTERS,
      () => searchCharactersByName(name),
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

export const getCharacterById = (id) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_CHARACTER_INFO,
      () => getCharacter(id),
      (response) => {
        const name = response.data.name;
        const height = response.data.height;
        const mass = response.data.mass;
        const hairColor = response.data.hair_color;
        const skinColor = response.data.skin_color;
        const eyeColor = response.data.eye_color;
        const birthYear = response.data.birth_year;
        const gender = response.data.gender;
        const homeworld = response.data.homeworld;
        const films = response.data.films;
        const vehicles = response.data.vehicles;

        return {
          name,
          height,
          mass,
          hairColor,
          skinColor,
          eyeColor,
          birthYear,
          gender,
          homeworld,
          films,
          vehicles
        }
      }
    ))
  }
};