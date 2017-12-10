import * as actionTypes from '../constants/action-types';

export const enqueueError = (message) => {
  return {
    type: actionTypes.ENQUEUE_ERROR,
    message,
  };
};

export const dequeueError = () => {
  return {
    type: actionTypes.DEQUEUE_ERROR,
  };
};
