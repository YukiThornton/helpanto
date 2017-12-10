import * as actionTypes from '../constants/action-types';
import * as modalTypes from '../constants/modal-types';

export const openModalNewRecipe = () => {
  return {
    type: actionTypes.OPEN_MODAL,
    modalType: modalTypes.MODAL_TYPE_NEW_RECIPE,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};
