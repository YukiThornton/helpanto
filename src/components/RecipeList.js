import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RecipeRow from './RecipeRow';
import Spinner from 'react-spinkit';
import '../styles/App.css';

class RecipeList extends Component {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      recipes: PropTypes.object.isRequired,
      selectedRecipeId: PropTypes.string.isRequired,
      onRecipeRowClick: PropTypes.func.isRequired,
      fetchRecipesIfNeeded: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.fetchRecipesIfNeeded();
    }

    render() {
      if (this.props.isFetching) {
        return (
          <div className="Spinner">
            <Spinner name="chasing-dots" color="gray" />
          </div>
        )
      }
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
