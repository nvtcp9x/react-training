import { combineReducers } from 'redux';

import usersById from './usersByIdReducer';
import postsById from './postsByIdReducer';
import postListing from './postListingReducer';
import count from '../containers/Counter/reducer';

const createReducer = asyncReducers =>
  combineReducers({
    usersById,
    postsById,
    postListing,
    count,
    ...asyncReducers,
  });

export default createReducer;
