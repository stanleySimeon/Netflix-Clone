import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './reducers/userReducer';

const mainReducer = combineReducers({
  reducers: userReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunk, logger));
export default store;
