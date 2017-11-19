import { ENQUEUE_ERROR, DEQUEUE_ERROR } from '../actions/error-actions';

const initialState = {
  exists: false,
  messages: [],
};

const error = (state = initialState, action) => {
  switch (action.type) {
    case ENQUEUE_ERROR:
      return {
        exists: true,
        messages: state.messages.concat(action.message),
      };
    case DEQUEUE_ERROR:
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
