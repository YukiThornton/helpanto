import {
  OPEN_MODAL,
  CLOSE_MODAL,
  MODAL_TYPE_NONE,
} from '../actions/modal-actions';

const initialState = {
  isOpen: false,
  modalType: MODAL_TYPE_NONE,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        isOpen: true,
        modalType: action.modalType,
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        modalType: MODAL_TYPE_NONE,
      };
    default:
      return state;
  }
}

export default modal;
