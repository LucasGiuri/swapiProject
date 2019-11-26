import { FETCH_FILMS, GET_FILM_INFO } from './types';
import { filmsFetch, searchFilmsByName, getFilm } from '../../apis/services';
import apiCall from '../apiCall';

export const fetchFilms = (url) => {
  const URI = url ? filmsFetch(url) : filmsFetch();
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_FILMS,
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

export const searchFilms = (name) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      FETCH_FILMS,
      () => searchFilmsByName(name),
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

export const getFilmById = (id) => {
  return async (dispatch) => {
    return dispatch(apiCall(
      GET_FILM_INFO,
      () => getFilm(id),
      (response) => {
        const title = response.data.title;
        const director = response.data.director;
        const producer = response.data.producer;
        const releaseDate = response.data.release_date;
        const vehicles = response.data.vehicles;
        const characters = response.data.characters;
        const planets = response.data.planets;

        return {
          title,
          director,
          producer,
          releaseDate,
          vehicles,
          characters,
          planets
        }
      }
    ))
  }
};