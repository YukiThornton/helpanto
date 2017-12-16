import React from 'react';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

const RecipeDetail = ({
  visible,
  recipe,
}) => {
  if (visible) {
    return (
      <div className="Recipe-Details">
        <h2>{recipe.title}</h2>
        <p
          style={{
            color: 'gray',
          }}
        >
          {recipe.content}
        </p>
      </div>
    );
  }
  return <div className="Recipe-Details" />;
};

RecipeDetail.propTypes = {
  visible: PropTypes.bool.isRequired,
  recipe: isRequiredIf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      lastModifiedAt: PropTypes.string.isRequired,
    }),
    props => props.visible,
  ),
};

export default RecipeDetail;
