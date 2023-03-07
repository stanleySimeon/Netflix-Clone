import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';
import { moviesReducer } from './reducers/moviesReducer';
import { searchReducer } from './reducers/searchReducer';
import featuredMovieReducer from './reducers/featuredMovieReducer';

const mainReducer = combineReducers({
  users: userReducer,
  movies: moviesReducer,
  search: searchReducer,
  featured: featuredMovieReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
export default store;
