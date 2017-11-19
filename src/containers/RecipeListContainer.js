import { connect } from 'react-redux';
import { selectRecipeOnList, fetchRecipesIfNeeded } from '../actions/recipe-actions';
import RecipeList from '../components/RecipeList';

import { openModalNewRecipe } from '../actions/modal-actions';

const mapStateToProps = state => {
  return {
    isFetching: state.entity.recipes.isFetching,
    recipes: state.entity.recipes.byId,
    selectedRecipeId: state.status.recipeList.selectedRecipeId,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRecipeRowClick: id => {
      dispatch(selectRecipeOnList(id));
    },
    fetchRecipesIfNeeded: () => {
      dispatch(fetchRecipesIfNeeded());
    },
    openModalNewRecipe: () => {
      dispatch(openModalNewRecipe());
    },
  };
}

const RecipeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default RecipeListContainer;
