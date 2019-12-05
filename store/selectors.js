import * as charactersSelectors from './characters/selectors';
import * as planetsSelectors from './planets/selectors';
import * as vehiclesSelectors from './vehicles/selectors';
import * as filmsSelectors from './films/selectors';

export const getAllCharacters = (state) => charactersSelectors.getAllCharacters(state.characters);
export const getCharacterById = (state) => charactersSelectors.getCharacterById(state.characters);
export const isLoadingCharacters = (state) => charactersSelectors.isLoadingCharacters(state.characters);
export const getTotalCharacters = (state) => charactersSelectors.getTotalCharacters(state.characters);
export const getCharactersNextPage = (state) => charactersSelectors.getCharactersNextPage(state.characters);
export const getCharactersPreviousPage = (state) => charactersSelectors.getCharactersPreviousPage(state.characters);

export const getAllPlanets = (state) => planetsSelectors.getAllPlanets(state.planets);
export const getPlanetById = (state) => planetsSelectors.getPlanetById(state.planets);
export const isLoadingPlanets = (state) => planetsSelectors.isLoadingPlanets(state.planets);
export const getTotalPlanets = (state) => planetsSelectors.getTotalPlanets(state.planets);
export const getPlanetsNextPage = (state) => planetsSelectors.getPlanetsNextPage(state.planets);
export const getPlanetsPreviousPage = (state) => planetsSelectors.getPlanetsPreviousPage(state.planets);

export const getAllVehicles = (state) => vehiclesSelectors.getAllVehicles(state.vehicles);
export const getVehicleById = (state) => vehiclesSelectors.getVehicleById(state.vehicles);
export const isLoadingVehicles = (state) => vehiclesSelectors.isLoadingVehicles(state.vehicles);
export const getTotalVehicles = (state) => vehiclesSelectors.getTotalVehicles(state.vehicles);
export const getVehiclesNextPage = (state) => vehiclesSelectors.getVehiclesNextPage(state.vehicles);
export const getVehiclesPreviousPage = (state) => vehiclesSelectors.getVehiclesPreviousPage(state.vehicles);

export const getAllFilms = (state) => filmsSelectors.getAllFilms(state.films);
export const getFilmById = (state) => filmsSelectors.getFilmById(state.films);
export const isLoadingFilms = (state) => filmsSelectors.isLoadingFilms(state.films);
export const getTotalFilms = (state) => filmsSelectors.getTotalFilms(state.films);
export const getFilmsNextPage = (state) => filmsSelectors.getFilmsNextPage(state.films);
export const getFilmsPreviousPage = (state) => filmsSelectors.getFilmsPreviousPage(state.films);