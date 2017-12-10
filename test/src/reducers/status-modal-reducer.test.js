import reducer from '../../../src/reducers/status-modal-reducer';
import * as actionTypes from '../../../src/constants/action-types';
import * as modalTypes from '../../../src/constants/modal-types';

describe('status.modal reducer', () => {
  const initialState = {
    isOpen: false,
    modalType: modalTypes.MODAL_TYPE_NONE,
  };
  const stateOpened = {
    isOpen: true,
    modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('should handle OPEN_MODAL', () => {
    it('should set modalType (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.OPEN_MODAL,
          modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
        },
      )).toEqual({
        isOpen: true,
        modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
      });
    });

    it('should set modalType', () => {
      expect(reducer(
        stateOpened,
        {
          type: actionTypes.OPEN_MODAL,
          modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
        },
      )).toEqual({
        isOpen: true,
        modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
      });
    });
  });

  describe('should handle CLOSE_MODAL', () => {
    it('should set isOpen to false (from initialState)', () => {
      expect(reducer(
        initialState,
        {
          type: actionTypes.CLOSE_MODAL,
        },
      )).toEqual({
        isOpen: false,
        modalType: modalTypes.MODAL_TYPE_NONE,
      });
    });

    it('should set isOpen to false', () => {
      expect(reducer(
        stateOpened,
        {
          type: actionTypes.CLOSE_MODAL,
        },
      )).toEqual({
        isOpen: false,
        modalType: modalTypes.MODAL_TYPE_NONE,
      });
    });
  });
});
