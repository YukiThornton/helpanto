import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = ({visible, title, content, createdAt, lastModifiedAt}) => {
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

RecipeDetail.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  lastModifiedAt: PropTypes.string,
};

export default RecipeDetail;
