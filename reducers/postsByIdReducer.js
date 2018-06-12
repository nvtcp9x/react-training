import { RECEIVE_DATA } from '../types/data';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA: {
      const newState = { ...state };
      action.payload.posts.forEach(post => {
        newState[post.id] = post;
      });

      return newState;
    }

    default:
      return state;
  }
};
