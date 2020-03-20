import React from "react";
import "./App.css";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)) 
)
const App =() => {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

export default App;
