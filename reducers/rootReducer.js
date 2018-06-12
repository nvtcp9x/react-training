import { combineReducers } from 'redux';

import messageReducer from './message';
import usersByIdReducer from './usersByIdReducer';
import usersListingReducer from './usersListingReducer';
import postsByIdReducer from './postsByIdReducer';
import postListingReducer from './postListingReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  messageReducer,
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,
  postsById: postsByIdReducer,
  postListing: postListingReducer,
  count: counterReducer,
});

export default rootReducer;
