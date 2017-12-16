import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { createRecipe, fetchRecipes } from '../actions/recipe-actions';
import { closeModal } from '../actions/modal-actions';
import { MODAL_TYPE_NEW_RECIPE } from '../constants/modal-types';

export class NewRecipeModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    onRequestCreateRecipe: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  clearInput = () => {
    this.setState({
      title: '',
      content: '',
    });
  };

  handleSubmit = () => {
    this.props.onRequestCreateRecipe(this.state.title, this.state.content);
    this.clearInput();
  };

  handleRequestClose = () => {
    this.clearInput();
    this.props.onRequestClose();
  };

  handleTextInput = (input) => {
    this.setState(input);
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.handleRequestClose}
      >
        <h1>Create new recipe</h1>
        <TextField
          hintText="Recipe title"
          value={this.state.title}
          onChange={(e, val) => this.handleTextInput({ title: val })}
        />
        <br />
        <br />
        <TextField
          multiLine
          rows={4}
          rowsMax={6}
          hintText="Recipe content"
          value={this.state.content}
          onChange={(e, val) => this.handleTextInput({ content: val })}
        />
        <FlatButton
          onClick={this.handleSubmit}
          label="Create"
          fullWidth
        />
        <FlatButton
          onClick={this.handleRequestClose}
          label="Cancel"
          fullWidth
        />
      </Modal>
    );
  }
}

const isOpen = state =>
  state.status.modal.isOpen && state.status.modal.modalType === MODAL_TYPE_NEW_RECIPE;

export const mapStateToProps = (state) => {
  return {
    isOpen: isOpen(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestClose: () => {
      dispatch(closeModal());
    },
    onRequestCreateRecipe: (title, content) => {
      dispatch(createRecipe(title, content)).then(() => {
        dispatch(fetchRecipes());
      });
      dispatch(closeModal());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRecipeModal);
