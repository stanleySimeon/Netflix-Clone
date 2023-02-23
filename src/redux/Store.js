import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';
import { moviesReducer } from './reducers/moviesReducer';

const mainReducer = combineReducers({
  users: userReducer,
  movies: moviesReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
export default store;
