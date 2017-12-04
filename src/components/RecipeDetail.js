import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = ({visible, title, content, createdAt, lastModifiedAt}) => {
  if (visible) {
    return (
      <div className='Recipe-Details'>
        <h2>{title}</h2>
        <p style={{color: 'gray'}}>{content}</p>
      </div>
    );
  } else {
    return <div className='Recipe-Details'></div>;
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
