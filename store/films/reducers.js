import { combineReducers } from 'redux';
import { 
  FETCH_FILMS_START, 
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAIL,
  GET_FILM_INFO_START,
  GET_FILM_INFO_SUCCESS,
  GET_FILM_INFO_FAIL
 } from './types';

const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS: {
      return action.response
    }

    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case GET_FILM_INFO_SUCCESS: {
      return {
        title: action.title,
        director: action.director,
        producer: action.producer,
        releaseDate: action.releaseDate,
        vehicles: action.vehicles,
        characters: action.characters,
        planets: action.planets
      }
    }
    default:
      return state
  }
}

const totalItems = (state = 0, action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS: {
      return action.total
    }

    default:
      return state
  }
}

const previous = (state = '', action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS: {
      return action.previous
    }

    default:
      return state
  }
}

const next = (state = '', action) => {
  switch (action.type) {
    case FETCH_FILMS_SUCCESS: {
      return action.next
    }

    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_FILMS_START:
    case GET_FILM_INFO_START:
      return true

    case FETCH_FILMS_SUCCESS:
    case FETCH_FILMS_FAIL:
    case GET_FILM_INFO_SUCCESS:
    case GET_FILM_INFO_FAIL:
      return false

    default:
      return state
  }
}

const reducer = combineReducers({
  items,
  itemSelected,
  totalItems,
  next,
  previous,
  isLoading
})

export default reducer;
