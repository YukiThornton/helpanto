import React from 'react';
// import PropTypes from 'prop-types';

const RecipeRow = ({onClick, title, selected}) => (
  <li
    onClick={onClick}
    style={{
      color: selected ? 'green' : 'gray'
    }}
  >
    {title}
  </li>
);
// TODO: Add RecipeRow.propTypes
export default RecipeRow;
