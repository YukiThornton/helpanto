import * as actionTypes from '../constants/action-types';

const initialState = {
  isFetching: false,
  byId: {},
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_GET_RECIPES:
    case actionTypes.REQUEST_POST_RECIPE:
    case actionTypes.REQUEST_DELETE_RECIPE:
      return Object.assign({}, state,
        {
          isFetching: true,
        }
      );
    case actionTypes.REQUEST_GET_RECIPES_SUCCESS:
      return {
        isFetching: false,
        byId: action.recipes,
      };
    case actionTypes.REQUEST_POST_RECIPE_SUCCESS:
      return Object.assign({}, state,
        {
          isFetching: false,
          byId: Object.assign({}, state.byId,
            {
              [action.id]: action.recipe,
            }
          ),
        }
      );
    case actionTypes.REQUEST_DELETE_RECIPE_SUCCESS:
      const {[action.id]: deletedId, ...newRecipes} = state.byId;
      return Object.assign({}, state,
        {
          isFetching: false,
          byId: newRecipes,
        }
      );
    case actionTypes.REQUEST_GET_RECIPES_FAILURE:
    case actionTypes.REQUEST_POST_RECIPE_FAILURE:
    case actionTypes.REQUEST_DELETE_RECIPE_FAILURE:
      return Object.assign({}, state,
        {
          isFetching: false,
        }
      );
    default:
      return state;
  }
}

export default recipes;
