import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducers from './reducers/homeReducers.js';
import movieListReducers from './reducers/movieListReducers.js';

export default function (data) {
  const reducers = {
    homeReducers,
    movieListReducers,
  };
  const rootReducer = combineReducers(reducers);
  const finalCreateStore = applyMiddleware(thunk)(createStore);
  const store = finalCreateStore(rootReducer, data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}
