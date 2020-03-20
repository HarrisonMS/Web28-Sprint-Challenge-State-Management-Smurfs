import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const START_FETCHING = 'START_FETCHING';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export function getSmurfs() {
    return dispatch => {
      dispatch({ type: START_FETCHING });
        axios
            .get('http://localhost:3333/smurfs')
                .then((res) => {
                    dispatch({ type: GET_SMURFS, payload: res.data})
                })
                .catch((err) => dispatch({type: FETCH_FAILURE, payload: err.response}))
    }
}