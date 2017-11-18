import {
  REQUEST_GET_RECIPES,
  REQUEST_GET_RECIPES_SUCCESS,
  REQUEST_GET_RECIPES_FAILURE,
} from '../actions/recipe';

const initialState = {
  isFetching: false,
  byId: {},
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_RECIPES:
      return Object.assign({}, state,
        {
          isFetching: true,
        }
      );
    case REQUEST_GET_RECIPES_SUCCESS:
      return Object.assign({}, state,
        {
          isFetching: false,
          byId: action.recipes,
        }
      );
    case REQUEST_GET_RECIPES_FAILURE:
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
