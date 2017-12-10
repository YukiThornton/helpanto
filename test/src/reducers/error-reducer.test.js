import reducer from '../../../src/reducers/error-reducer';
import * as actionTypes from '../../../src/constants/action-types';

describe('error reducer', () => {
  const initialState = {
    exists: false,
    messages: [],
  };
  const queuedState = {
    exists: true,
    messages: ['queuedState1', 'queuedState2'],
  };
  const message = 'message1';

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('should handle ENQUEUE_ERROR', () => {
    it('should queue a message (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.ENQUEUE_ERROR,
          message,
        },
      )).toEqual({
        exists: true,
        messages: [message],
      });
    });

    it('should queue a message', () => {
      expect(reducer(
        queuedState,
        {
          type: actionTypes.ENQUEUE_ERROR,
          message,
        },
      )).toEqual({
        exists: true,
        messages: [...queuedState.messages, message],
      });
    });
  });

  describe('should handle DEQUEUE_ERROR', () => {
    it('should queue a message (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.DEQUEUE_ERROR,
        },
      )).toEqual({
        exists: false,
        messages: [],
      });
    });

    it('should queue a message', () => {
      expect(reducer(
        queuedState,
        {
          type: actionTypes.DEQUEUE_ERROR,
        },
      )).toEqual({
        exists: true,
        messages: queuedState.messages.slice(1),
      });
    });
  });
});
