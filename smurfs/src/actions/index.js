import axios from 'axios';
export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: LOAD_START });
  const url = 'http:localhost:3333/smurfs'
  axios
  .get(url)
  .then((res) => {
    console.log(res);
    dispatch({ type:LOAD_SUCCESS, payload: res.data })
  })
  .catch(error => {
    dispatch({ type: LOAD_FAILURE, payload: error.message})
  })
}

export const addSmurf = (formData) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  const url = 'http:localhost:3333/smurfs'
  axios
  .post(url, formData)
  .then(res => {
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
  })
  .catch(error => {
    dispatch({ type: ADD_SMURF_FAIL, payload: error.message })
  })
}