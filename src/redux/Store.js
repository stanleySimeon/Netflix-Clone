import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';
import { moviesReducer } from './reducers/moviesReducer';
import { searchReducer } from './reducers/searchReducer';

const mainReducer = combineReducers({
  users: userReducer,
  movies: moviesReducer,
  search: searchReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
export default store;
