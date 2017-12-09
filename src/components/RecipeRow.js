import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const BLUE_GRAY_100 = '#CFD8DC';
const BLUE_GRAY_300 = '#90A4AE';
const BLUE_GRAY_400 = '#78909C';
const BLUE_GRAY_700 = '#455A64';

const itemStyle = {
  color: BLUE_GRAY_400,
  fontSize: 30,
};
const selectedItemStyle = {
  color: BLUE_GRAY_700,
  fontSize: 30,
  backgroundColor: BLUE_GRAY_100,
};
const RecipeRow = ({id, title, selected, onClick, onClickDeleteBtn}) => {
  const rightIconButton = (
    <IconButton>
      <DeleteIcon
        color={BLUE_GRAY_300}
        onClick={() => onClickDeleteBtn(id)}
      />
    </IconButton>
  );

  return (
    <ListItem
      primaryText={title}
      onClick={onClick}
      style={selected ? selectedItemStyle: itemStyle}
      rightIconButton={rightIconButton}
    />
  )
};

RecipeRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
};

export default RecipeRow;
