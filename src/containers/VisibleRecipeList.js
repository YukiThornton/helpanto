import { connect } from 'react-redux';
import { selectRecipeOnList, updateRecipesIfNeeded } from '../actions/recipe';
import RecipeList from '../components/RecipeList';

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
    updateRecipesIfNeeded: () => {
      dispatch(updateRecipesIfNeeded());
    }
  };
}

const VisibleRecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default VisibleRecipeList;
