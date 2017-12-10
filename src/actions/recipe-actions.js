import * as actionTypes from '../constants/action-types';
import { enqueueError } from './error-actions.js';

const API_ROOT = 'http://localhost:3000';

const isSelectedRecipe = (id, getState) => {
  return getState().status.recipeList.selected && id === getState().status.recipeList.selectedRecipeId;
}

export const selectRecipeOnList = id => dispatch => {
  return dispatch({
    type: actionTypes.SELECT_RECIPE_ON_LIST,
    id
  });
};

export const deselectRecipeOnListIfRemoved = id => (dispatch, getState) => {
  if (isSelectedRecipe(id, getState)) {
    return dispatch({
      type: actionTypes.DESELECT_RECIPE_ON_LIST,
    });
  }
};

export const filterRecipeList = filterText => {
  return {
    type: actionTypes.FILTER_RECIPE_LIST,
    filterText,
  };
};

const requestGetRecipes = () => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES,
  };
}

const convertRecipe = (apiRecipe) => {
  return {
      title: apiRecipe.title,
      content: apiRecipe.content,
      createdAt: apiRecipe.created_at,
      lastModifiedAt: apiRecipe.last_modified_at,
  };
}

const convertRecipes = (apiRecipes) => {
  const recipes = {};
  apiRecipes.map((recipe) =>
    recipes[recipe.id] = convertRecipe(recipe)
  );
  return recipes;
}

const succeedGetRecipes = (recipes) => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES_SUCCESS,
    recipes: recipes,
  };
}

const failGetRecipes = () => {
  return {
    type: actionTypes.REQUEST_GET_RECIPES_FAILURE,
  };
}

const shouldFetchRecipes = getState => {
  const recipes = getState().entity.recipes;
  if (Object.keys(recipes.byId).length > 0) {
    return false;
  }
  if (recipes.isFetching) {
    return false;
  }
  return true;
}

const fetchRecipes = () => dispatch => {
  dispatch(requestGetRecipes());
  return fetch(`${API_ROOT}/recipes`)
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to get recipe lists. See you later.');
      }
      return res.json();
    })
    .then(json => {
      return dispatch(succeedGetRecipes(convertRecipes(json.recipes)));
    })
    .catch(error => {
      dispatch(failGetRecipes());
      return dispatch(enqueueError(error.message));
    })
}

export const fetchRecipesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchRecipes(getState)) {
    return dispatch(fetchRecipes());
  }
};

const requestPostRecipe = () => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE,
  };
}

const succeedPostRecipe = (id, recipe) => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE_SUCCESS,
    recipe: recipe,
    id: id,
  };
}

const failPostRecipe = () => {
  return {
    type: actionTypes.REQUEST_POST_RECIPE_FAILURE,
  };
}

export const createRecipe = (title, content) => (dispatch, getState) => {
  dispatch(requestPostRecipe());
  return fetch(`${API_ROOT}/recipe`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      content
    })
  })
    .then(res => {
      if (res.status !== 201) {
        throw new Error('Failed to create a new recipe. See you later.');
      }
      return res.json();
    })
    .then(json => {
      return dispatch(succeedPostRecipe(json.id, convertRecipe(json)));
    })
    .then(() => {
      return dispatch(fetchRecipes());
    })
    .catch(error => {
      dispatch(failPostRecipe());
      return dispatch(enqueueError(error.message));
    })
};

const requestDeleteRecipe = () => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE,
  };
}

const succeedDeleteRecipe = (id) => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE_SUCCESS,
    id,
  };
}

const failDeleteRecipe = () => {
  return {
    type: actionTypes.REQUEST_DELETE_RECIPE_FAILURE,
  };
}

export const deleteRecipe = (id) => dispatch => {
  dispatch(requestDeleteRecipe());
  return fetch(`${API_ROOT}/recipe/${id}`, {
    method: 'delete',
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Failed to delete a recipe. See you later.');
      }
      return res.json();
    })
    .then(json => {
      return dispatch(succeedDeleteRecipe(id));
    })
    .then(() => {
      return dispatch(deselectRecipeOnListIfRemoved(id));
    })
    .then(() => {
      return dispatch(fetchRecipes());
    })
    .catch(error => {
      dispatch(failDeleteRecipe());
      return dispatch(enqueueError(error.message));
    })
}
