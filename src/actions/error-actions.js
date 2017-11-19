export const ENQUEUE_ERROR = 'ENQUEUE_ERROR';
export const DEQUEUE_ERROR = 'DEQUEUE_ERROR';

export const enqueueError = message => {
  return {
    type: ENQUEUE_ERROR,
    message
  };
};

export const dequeueError = () => {
  return {
    type: DEQUEUE_ERROR,
  };
};
