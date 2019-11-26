import { combineReducers } from 'redux';
import { 
  FETCH_VEHICLES_START, 
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAIL,
  GET_VEHICLE_INFO_START,
  GET_VEHICLE_INFO_SUCCESS,
  GET_VEHICLE_INFO_FAIL
 } from './types';

const items = (state = [], action) => {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS: {
      return action.response
    }

    default:
      return state
  }
}

const itemSelected = (state = {}, action) => {
  switch (action.type) {
    case GET_VEHICLE_INFO_SUCCESS: {
      return {
        name: action.name,
        model: action.model,
        vehicleClass: action.vehicleClass,
        credits: action.credits,
        passengers: action.passengers,
        speed: action.speed,
        capacity: action.capacity,
        films: action.films,
        pilots: action.pilots
      }
    }
    default:
      return state
  }
}

const totalItems = (state = 0, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS: {
      return action.total
    }

    default:
      return state
  }
}

const previous = (state = '', action) => {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS: {
      return action.previous
    }

    default:
      return state
  }
}

const next = (state = '', action) => {
  switch (action.type) {
    case FETCH_VEHICLES_SUCCESS: {
      return action.next
    }

    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_START:
    case GET_VEHICLE_INFO_START:
      return true

    case FETCH_VEHICLES_SUCCESS:
    case FETCH_VEHICLES_FAIL:
    case GET_VEHICLE_INFO_SUCCESS:
    case GET_VEHICLE_INFO_FAIL:
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
