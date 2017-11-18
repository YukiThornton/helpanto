import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RecipeRow from './RecipeRow';

class RecipeList extends Component {
    static propTypes = {
      recipes: PropTypes.object.isRequired,
      selectedRecipeId: PropTypes.string.isRequired,
      onRecipeRowClick: PropTypes.func.isRequired,
      updateRecipesIfNeeded: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.updateRecipesIfNeeded();
    }

    render() {
      return (
        <ul>
          {Object.keys(this.props.recipes).map(key => (
            <RecipeRow
              key={key}
              title={this.props.recipes[key].title}
              selected={this.props.selectedRecipeId === key}
              onClick={() => this.props.onRecipeRowClick(key)}
            />
          ))}
        </ul>
      );
    }
}

export default RecipeList;
