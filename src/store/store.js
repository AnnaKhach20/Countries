import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk}from 'redux-thunk';
import { countriesReducer, countryReducer, textReducer } from './reducers';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  search: textReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));