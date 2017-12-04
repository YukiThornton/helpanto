import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { ListItem } from 'material-ui/List';

const itemStyle = {
  color: '#78909C',
  fontSize: 30,
};
const selectedItemStyle = {
  color: '#455A64',
  fontSize: 30,
  backgroundColor: '#CFD8DC',
};

const RecipeRow = ({title, selected, onClick}) => (
  <ListItem
    primaryText={title}
    onClick={onClick}
    style={selected ? selectedItemStyle: itemStyle}
  />
);

RecipeRow.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RecipeRow;
