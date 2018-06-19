// @flow

import SET_MESSAGE from './constants';

const initState = {
  message: '',
};

type State = {
  message: string,
};

export default (state: State = initState, action: Object): Object => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
