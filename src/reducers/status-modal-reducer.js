import * as actionTypes from '../constants/action-types';
import * as modalTypes from '../constants/modal-types';

const initialState = {
  isOpen: false,
  modalType: modalTypes.MODAL_TYPE_NONE,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        isOpen: true,
        modalType: action.modalType,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        isOpen: false,
        modalType: modalTypes.MODAL_TYPE_NONE,
      };
    default:
      return state;
  }
};

export default modal;
