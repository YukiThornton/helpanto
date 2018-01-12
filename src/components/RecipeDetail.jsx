import React from 'react';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import * as recipeTypes from '../constants/recipe-types';

const RecipeDetail = ({
  visible,
  recipe,
}) => {
  if (visible) {
    switch (recipe.recipeType) {
      case recipeTypes.RECIPE_TYPE_MEMO:
        return (
          <div className="Recipe-Details">
            <h2>{recipe.title}</h2>
            <p
              style={{
                color: 'gray',
              }}
            >
              {recipe.body.memo}
            </p>
          </div>
        );
      default:
        return <div />;
    }
  }
  return <div className="Recipe-Details" />;
};

RecipeDetail.propTypes = {
  visible: PropTypes.bool.isRequired,
  recipe: isRequiredIf(
    PropTypes.shape({
      recipeType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.shape({
        memo: PropTypes.string.isRequired,
      }),
      createdAt: PropTypes.string.isRequired,
      lastModifiedAt: PropTypes.string.isRequired,
    }),
    props => props.visible,
  ),
};

export default RecipeDetail;
