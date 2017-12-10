import * as actions from '../../../src/actions/error-actions';
import * as actionTypes from '../../../src/constants/action-types';

describe('error-actions', () => {
  describe('enqueueError', () => {
    it('should return an action with message', () => {
      const message = 'this is a message';
      const expectedAction = {
        type: actionTypes.ENQUEUE_ERROR,
        message,
      };
      expect(actions.enqueueError(message)).toEqual(expectedAction);
    });
  });

  describe('dequeueError', () => {
    it('should return an action with DEQUEUE_ERROR', () => {
      const expectedAction = {
        type: actionTypes.DEQUEUE_ERROR,
      };
      expect(actions.dequeueError()).toEqual(expectedAction);
    });
  });
});
