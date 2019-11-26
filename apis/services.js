import axios from 'axios';

const BASE_API = 'https://swapi.co/api/';
const PEOPLE_API = `${BASE_API}people/`;
const PEOPLE_SEARCH_API = `${PEOPLE_API}?search=`;
const FILMS_API = `${BASE_API}films/`;
const FILMS_SEARCH_API = `${FILMS_API}?search=`;
const PLANETS_API = `${BASE_API}planets/`;
const PLANETS_SEARCH_API = `${PLANETS_API}?search=`;
const VEHICLES_API = `${BASE_API}vehicles/`;
const VEHICLES_SEARCH_API = `${VEHICLES_API}?search=`;

export const charactersFetch = (url) => axios.get(url ? url : PEOPLE_API).then(response => response.data);
export const searchCharactersByName = (name) => axios.get(PEOPLE_SEARCH_API + name).then(response => response.data);
export const getCharacter = (id) => axios.get(PEOPLE_API + id).then(response => response);
export const filmsFetch = (url) => axios.get(url ? url : FILMS_API).then(response => response.data);
export const searchFilmsByName = (name) => axios.get(FILMS_SEARCH_API + name).then(response => response.data);
export const getFilm = (id) => axios.get(FILMS_API + id).then(response => response);
export const planetsFetch = (url) => axios.get(url ? url : PLANETS_API).then(response => response.data);
export const searchPlanetsByName = (name) => axios.get(PLANETS_SEARCH_API + name).then(response => response.data);
export const getPlanet = (id) => axios.get(PLANETS_API + id).then(response => response);
export const vehiclesFetch = (url) => axios.get(url ? url : VEHICLES_API).then(response => response.data);
export const searchVehiclesByName = (name) => axios.get(VEHICLES_SEARCH_API + name).then(response => response.data);
export const getVehicle = (id) => axios.get(VEHICLES_API + id).then(response => response);
