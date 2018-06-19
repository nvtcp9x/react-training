import { createStore } from 'redux';

import createReducer from './reducers/rootReducer';
import RECEIVE_DATA from './types/data';
import getPosts from './fakeData';

const store = createStore(
  createReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initilizeStore = () => {
  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

store.dispatch({
  type: RECEIVE_DATA,
  payload: getPosts(),
});

export default initilizeStore;
