import { combineReducers } from 'redux';
import messageReducer from './message';

const rootReducer = combineReducers({
  messageReducer,
});

export default rootReducer;
