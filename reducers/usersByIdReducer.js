import { RECEIVE_DATA } from '../types/data';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA: {
      const newState = { ...state };
      action.payload.users.forEach(user => {
        newState[user.id] = user;
      });

      return newState;
    }

    default:
      return state;
  }
};
