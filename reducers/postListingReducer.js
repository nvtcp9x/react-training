import { RECEIVE_DATA } from '../types/data';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.payload.posts.map(post => post.id);
    default:
      return state;
  }
};
