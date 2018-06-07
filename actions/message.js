import SET_MESSAGE from '../types/message';

export default message => dispatch => {
  dispatch({
    type: SET_MESSAGE,
    payload: {
      message,
    },
  });
};
