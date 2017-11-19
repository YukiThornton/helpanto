import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const RecipeRow = ({title, selected, onClick}) => (
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

RecipeRow.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RecipeRow;
