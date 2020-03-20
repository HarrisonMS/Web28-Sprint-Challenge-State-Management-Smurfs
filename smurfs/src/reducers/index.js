import { initialState } from './initialState'
import { START_FETCHING, GET_SMURFS, FETCH_FAILURE, SMURF_ADDED, SMURF_FAIL, START_ADDING } from '../actions/getSmurfs';
import { SUBMIT_SMURF } from '../actions/submitSmurf'

export function smurfReducer(state = initialState, action) {
  switch(action.type) {
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case GET_SMURFS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload,
          error: '',
        }

    case SUBMIT_SMURF:
        console.log(state)
        return {
            smurfs: [
                ...state.smurfs,
                action.payload
            ]
        }

    default:
        return state;
  }
}



// import { initialState } from './initialState'
// import {
//   LOAD_START,
//   LOAD_SUCCESS,
//   LOAD_FAILURE, 
//   ADD_SMURF_START, 
//   ADD_SMURF_SUCCESS, 
//   ADD_SMURF_FAIL } from '../actions'

// export const reducer = ( state = initialState, action) => {
//   switch(action.type) {
//     case LOAD_START:
//     case ADD_SMURF_START:
//       console.log('API Called');
//       return {
//           ...state,
//           error: '',
//           loading: true
//       }
//     case LOAD_SUCCESS:
//     case ADD_SMURF_SUCCESS:
//       console.log('Data Loaded');
//       return {
//           ...state,
//           error: '',
//           loading: false,
//           smurfs: action.payload
//       }
//     case LOAD_FAILURE:
//     case ADD_SMURF_FAIL:  
//       return {
//           ...state,
//           error: action.payload,
//           loading: false
//       };
//     default:
//         return state;
//   }  
// }