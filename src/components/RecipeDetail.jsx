import React from 'react';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import * as recipeKinds from '../constants/recipe-kinds';

const RecipeDetail = ({
  visible,
  recipe,
}) => {
  if (visible) {
    switch (recipe.kind) {
      case recipeKinds.MEMO:
        return (
          <div className="Recipe-Details">
            <h2>{recipe.title}</h2>
            <p
              style={{
                color: 'gray',
              }}
            >
              {recipe.content.memo}
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
      kind: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.shape({
        memo: PropTypes.string.isRequired,
      }),
      createdAt: PropTypes.string.isRequired,
      lastModifiedAt: PropTypes.string.isRequired,
    }),
    props => props.visible,
  ),
};

export default RecipeDetail;
