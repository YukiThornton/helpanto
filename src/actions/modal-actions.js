export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const MODAL_TYPE_NEW_RECIPE = 'MODAL_TYPE_NEW_RECIPE';
export const MODAL_TYPE_NONE = 'MODAL_TYPE_NONE';

export const openModalNewRecipe = () => {
  return {
    type: OPEN_MODAL,
    modalType: MODAL_TYPE_NEW_RECIPE,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
