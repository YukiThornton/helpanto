import { enqueueError } from './error-actions.js';

const API_ROOT = 'http://localhost:3000';
export const SELECT_RECIPE_ON_LIST = 'SELECT_RECIPE_ON_LIST';
export const DESELECT_RECIPE_ON_LIST = 'DESELECT_RECIPE_ON_LIST';
export const FILTER_RECIPE_LIST = 'FILTER_RECIPE_LIST';
export const REQUEST_GET_RECIPES = 'REQUEST_GET_RECIPES';
export const REQUEST_GET_RECIPES_SUCCESS = 'REQUEST_GET_RECIPES_SUCCESS';
export const REQUEST_GET_RECIPES_FAILURE = 'REQUEST_GET_RECIPES_FAILURE';
export const REQUEST_POST_RECIPE = 'REQUEST_POST_RECIPE';
export const REQUEST_POST_RECIPE_SUCCESS = 'REQUEST_POST_RECIPE_SUCCESS';
export const REQUEST_POST_RECIPE_FAILURE = 'REQUEST_POST_RECIPE_FAILURE';
export const REQUEST_DELETE_RECIPE = 'REQUEST_DELETE_RECIPE';
export const REQUEST_DELETE_RECIPE_SUCCESS = 'REQUEST_DELETE_RECIPE_SUCCESS';
export const REQUEST_DELETE_RECIPE_FAILURE = 'REQUEST_DELETE_RECIPE_FAILURE';

const isSelectedRecipe = (id, getState) => {
  return getState().status.recipeList.selected && id === getState().status.recipeList.selectedRecipeId;
}

export const selectRecipeOnList = id => dispatch => {
  return dispatch({
    type: SELECT_RECIPE_ON_LIST,
    id
  });
};

export const deselectRecipeOnListIfRemoved = id => (dispatch, getState) => {
  if (isSelectedRecipe(id, getState)) {
    return dispatch({
      type: DESELECT_RECIPE_ON_LIST,
      id
    });
  }
};

export const filterRecipeList = filterText => {
  return {
    type: FILTER_RECIPE_LIST,
    filterText,
  };
};

const requestGetRecipes = () => {
  return {
    type: REQUEST_GET_RECIPES,
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
    type: REQUEST_GET_RECIPES_SUCCESS,
    recipes: recipes,
  };
}

const failGetRecipes = () => {
  return {
    type: REQUEST_GET_RECIPES_FAILURE,
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
    type: REQUEST_POST_RECIPE,
  };
}

const succeedPostRecipe = (id, recipe) => {
  return {
    type: REQUEST_POST_RECIPE_SUCCESS,
    recipe: recipe,
    id: id,
  };
}

const failPostRecipe = () => {
  return {
    type: REQUEST_POST_RECIPE_FAILURE,
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
    type: REQUEST_DELETE_RECIPE,
  };
}

const succeedDeleteRecipe = (id) => {
  return {
    type: REQUEST_DELETE_RECIPE_SUCCESS,
    id,
  };
}

const failDeleteRecipe = () => {
  return {
    type: REQUEST_DELETE_RECIPE_FAILURE,
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
