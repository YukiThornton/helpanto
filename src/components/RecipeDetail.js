import React from 'react';
// import PropTypes from 'prop-types';

const RecipeDetail = ({visible, title, content, created_at, last_modified_at}) => {
  if (visible) {
    return (
      <div>
        {content}
      </div>
    );
  } else {
    return <div></div>;
  }
};
// TODO: Add RecipeRow.propTypes
export default RecipeDetail;
