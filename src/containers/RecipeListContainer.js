import { connect } from 'react-redux';
import {
  selectRecipeOnList,
  deselectRecipeOnList,
  filterRecipeList,
  fetchRecipes,
  deleteRecipe,
} from '../actions/recipe-actions';
import RecipeList from '../components/RecipeList';

import { openModalNewRecipe } from '../actions/modal-actions';

const getVisibleRecipes = (recipes, filterText) => {
  if (filterText.length === 0) {
    return recipes;
  }
  const result = {};
  Object.keys(recipes).forEach((k) => {
    if (recipes[k].title.startsWith(filterText)) {
      result[k] = recipes[k];
    }
  });
  return result;
};

export const mapStateToProps = (state) => {
  return {
    isFetching: state.entity.recipes.isFetching,
    recipes: getVisibleRecipes(state.entity.recipes.byId, state.status.recipeList.filterText),
    selectedRecipeId: state.status.recipeList.selectedRecipeId,
  };
};

const deleteAndFetch = (dispatch, id) => {
  dispatch(deleteRecipe(id)).then(() => {
    dispatch(fetchRecipes());
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeRowClick: (id) => {
      dispatch(selectRecipeOnList(id));
    },
    onSearchInputChange: (filterText) => {
      dispatch(filterRecipeList(filterText));
    },
    fetchRecipes: () => {
      dispatch(fetchRecipes());
    },
    openModalNewRecipe: () => {
      dispatch(openModalNewRecipe());
    },
    deselectRecipe: () => {
      dispatch(deselectRecipeOnList());
    },
    onClickRecipeDeleteBtn: (id) => {
      deleteAndFetch(dispatch, id);
    },
  };
};

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeList);

export default RecipeListContainer;
