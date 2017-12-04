import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import RecipeRow from './RecipeRow';
import Spinner from 'react-spinkit';
import '../styles/App.css';

// TODO: Move the button away
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class RecipeList extends Component {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      recipes: PropTypes.object.isRequired,
      selectedRecipeId: PropTypes.string.isRequired,
      onRecipeRowClick: PropTypes.func.isRequired,
      fetchRecipesIfNeeded: PropTypes.func.isRequired,
      openModalNewRecipe: PropTypes.func.isRequired,
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
        <div className='Recipe-list'>
          <List>
            {Object.keys(this.props.recipes).map(key => (
              <RecipeRow
                key={key}
                title={this.props.recipes[key].title}
                selected={this.props.selectedRecipeId === key}
                onClick={() => this.props.onRecipeRowClick(key)}
              />
            ))}
          </List>
          <FloatingActionButton
            onClick={this.props.openModalNewRecipe}
            style={{position: 'fixed', top: 50, right: 30}}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      );
    }
}

export default RecipeList;
