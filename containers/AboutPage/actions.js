// @flow

import SET_MESSAGE from './constants';

export default function(message: string) {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
}
