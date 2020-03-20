import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";
import { smurfReducer } from './reducers/index';

const store = createStore(
    smurfReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)));
    console.log(smurfReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider> , document.getElementById("root"));