import * as actionTypes from '../constants/action-types';
import { INVALID_RECIPE_ID } from '../constants/values';

const initialState = {
  selected: false,
  selectedRecipeId: INVALID_RECIPE_ID,
  filterText: '',
};

const recipeListStatus = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_RECIPE_ON_LIST:
      return Object.assign({}, state,
        {
          selected: true,
          selectedRecipeId: action.id,
        }
      );
    case actionTypes.DESELECT_RECIPE_ON_LIST:
      return Object.assign({}, state,
        {
          selected: false,
          selectedRecipeId: INVALID_RECIPE_ID,
        }
      );
    case actionTypes.FILTER_RECIPE_LIST:
      return Object.assign({}, state,
        {
          filterText: action.filterText,
        }
      );
    default:
      return state;
  }
}

export default recipeListStatus;
