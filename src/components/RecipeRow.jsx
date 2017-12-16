import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {
  BLUE_GRAY_100,
  BLUE_GRAY_300,
  BLUE_GRAY_400,
  BLUE_GRAY_700,
} from '../constants/colors';

const itemStyle = {
  color: BLUE_GRAY_400,
  fontSize: 30,
};
const selectedItemStyle = {
  color: BLUE_GRAY_700,
  fontSize: 30,
  backgroundColor: BLUE_GRAY_100,
};
const RecipeRow = ({
  id,
  title,
  selected,
  onClick,
  onClickDeleteBtn,
}) => {
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
      style={selected ? selectedItemStyle : itemStyle}
      rightIconButton={rightIconButton}
    />
  );
};

RecipeRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
};

export default RecipeRow;
