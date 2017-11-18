import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/App.css';

const RecipeRow = ({onClick, title, selected}) => (
  <li
    onClick={onClick}
    className="Clickable"
    style={{
      color: selected ? '#0097A7' : 'gray'
    }}
  >
    {title}
  </li>
);
// TODO: Add RecipeRow.propTypes
export default RecipeRow;
