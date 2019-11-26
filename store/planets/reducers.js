import { combineReducers } from 'redux';
import { 
  FETCH_PLANETS_START, 
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_FAIL,
  GET_PLANET_INFO_START,
  GET_PLANET_INFO_SUCCESS,
  GET_PLANET_INFO_FAIL
 } from './types';

const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS: {
      return action.response
    }

    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case GET_PLANET_INFO_SUCCESS: {
      return {
        name: action.name,
        diameter: action.diameter,
        rotation: action.rotation,
        orbital: action.orbital,
        gravity: action.gravity,
        population: action.population,
        climate: action.climate,
        terrain: action.terrain,
        surfaceWater: action.surfaceWater,
        residents: action.residents,
        film: action.film
      }
    }
    default:
      return state
  }
}

const totalItems = (state = 0, action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS: {
      return action.total
    }

    default:
      return state
  }
}

const previous = (state = '', action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS: {
      return action.previous
    }

    default:
      return state
  }
}

const next = (state = '', action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS: {
      return action.next
    }

    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_PLANETS_START:
    case GET_PLANET_INFO_START:
      return true

    case FETCH_PLANETS_SUCCESS:
    case FETCH_PLANETS_FAIL:
    case GET_PLANET_INFO_SUCCESS:
    case GET_PLANET_INFO_FAIL:
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
