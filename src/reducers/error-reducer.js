import * as actionTypes from '../constants/action-types';

const initialState = {
  exists: false,
  messages: [],
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ENQUEUE_ERROR:
      return {
        exists: true,
        messages: state.messages.concat(action.message),
      };
    case actionTypes.DEQUEUE_ERROR:
      const newMessages = state.messages.slice(1);
      return {
        exists: newMessages.length > 0,
        messages: newMessages,
      };
    default:
      return state;
  }
}

export default error;
