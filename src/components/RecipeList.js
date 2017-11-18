import React from 'react';
//import PropTypes from 'prop-types';
import RecipeRow from './RecipeRow';

const RecipeList = ({recipes, onRecipeRowClick, selectedRecipeId}) => {
  return (
    <ul>
      {Object.keys(recipes).map(key => (
        <RecipeRow
          key={key}
          title={recipes[key].title}
          selected={selectedRecipeId === key}
          onClick={() => onRecipeRowClick(key)}
        />
      ))}
    </ul>
  )
};

// TODO: Add RecipeList.propTypes

export default RecipeList;
