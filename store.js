import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';
import { RECEIVE_DATA } from './types/data';
import getPosts from './fakeData';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch({
  type: RECEIVE_DATA,
  payload: getPosts(),
});

export default store;
