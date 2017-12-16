import { connect } from 'react-redux';
import RecipeDetail from '../components/RecipeDetail';

const mapStateToProps = state => {
  if (state.status.recipeList.selected) {
    return {
      recipe: state.entity.recipes.byId[state.status.recipeList.selectedRecipeId],
      visible: true,
    };
  } else {
    return {
      visible: false,
    }
  }
}

const RecipeDetailContainer = connect(
  mapStateToProps,
)(RecipeDetail);

export default RecipeDetailContainer;
