import { connect } from 'react-redux';
import { selectRecipeOnList } from '../actions/recipe';
import RecipeList from '../components/RecipeList';

const mapStateToProps = state => {
  return {
    recipes: state.entity.recipes,
    selectedRecipeId: state.selected.recipeOnList.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRecipeRowClick: id => {
      dispatch(selectRecipeOnList(id))
    }
  };
}

const VisibleRecipeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export default VisibleRecipeList;
