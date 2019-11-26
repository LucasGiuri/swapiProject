import { combineReducers } from 'redux';
import { 
  FETCH_CHARACTERS_START, 
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
  GET_CHARACTER_INFO_START,
  GET_CHARACTER_INFO_SUCCESS,
  GET_CHARACTER_INFO_FAIL
 } from './types';

const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS: {
      return action.response
    }

    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case GET_CHARACTER_INFO_SUCCESS: {
      return {
        name: action.name,
        height: action.height,
        mass: action.mass,
        hairColor: action.hairColor,
        skinColor: action.skinColor,
        eyeColor: action.eyeColor,
        birthYear: action.birthYear,
        gender: action.gender,
        homeworld: action.homeworld,
        films: action.films,
        vehicles: action.vehicles
      }
    }
    default:
      return state
  }
}

const totalItems = (state = 0, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS: {
      return action.total
    }

    default:
      return state
  }
}

const previous = (state = '', action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS: {
      return action.previous
    }

    default:
      return state
  }
}

const next = (state = '', action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS: {
      return action.next
    }

    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
    case GET_CHARACTER_INFO_START:
      return true

    case FETCH_CHARACTERS_SUCCESS:
    case FETCH_CHARACTERS_FAIL:
    case GET_CHARACTER_INFO_SUCCESS:
    case GET_CHARACTER_INFO_FAIL:
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
