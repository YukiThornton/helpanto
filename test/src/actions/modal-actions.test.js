import * as actions from '../../../src/actions/modal-actions';
import * as actionTypes from '../../../src/constants/action-types';
import * as modalTypes from '../../../src/constants/modal-types';

describe('modal-actions', () => {
  describe('openModalNewRecipe', () => {
    it('should return an action with modalType', () => {
      const expectedAction = {
        type: actionTypes.OPEN_MODAL,
        modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
      };
      expect(actions.openModalNewRecipe()).toEqual(expectedAction);
    });
  });

  describe('closeModal', () => {
    it('should return an action with CLOSE_MODAL', () => {
      const expectedAction = {
        type: actionTypes.CLOSE_MODAL,
      };
      expect(actions.closeModal()).toEqual(expectedAction);
    });
  });
});
