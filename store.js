import { createStore, applyMiddleware, compose } from "redux";
import thunk from'redux-thunk';
import rootReducer from './src/reducers/index.js';

const initialState = {};
const middleware = [thunk];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;
