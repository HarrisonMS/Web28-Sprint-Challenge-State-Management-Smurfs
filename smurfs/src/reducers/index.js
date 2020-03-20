import { initialState } from './initialState'
import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE, 
  ADD_SMURF_START, 
  ADD_SMURF_SUCCESS, 
  ADD_SMURF_FAIL } from '../actions'

export const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case LOAD_START:
    case ADD_SMURF_START:
      console.log('API Called');
      return {
          ...state,
          error: '',
          loading: true
      }
    case LOAD_SUCCESS:
    case ADD_SMURF_SUCCESS:
      console.log('Data Loaded');
      return {
          ...state,
          error: '',
          loading: false,
          smurfs: action.payload
      }
    case LOAD_FAILURE:
    case ADD_SMURF_FAIL:  
      return {
          ...state,
          error: action.payload,
          loading: false
      };
    default:
        return state;
  }  
}