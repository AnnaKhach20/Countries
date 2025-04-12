import { createStore, combineReducers } from 'redux';
import { countriesReducer, countryReducer, textReducer } from './reducers';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  search: textReducer
});

const store = createStore(rootReducer);
const originalDispatch = store.dispatch;
store.dispatch = (action) => {
  if (typeof action === 'function') {
    return action(originalDispatch, store.getState);
  }
  return originalDispatch(action);
};

export { store };