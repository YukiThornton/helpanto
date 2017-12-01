import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipe-actions';
import { closeModal, MODAL_TYPE_NEW_RECIPE } from '../actions/modal-actions';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class NewRecipeModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  handleButtonClick = () => {
    this.props.onRequestCreateRecipe(this.state.title, this.state.content);
  };

  onClose = () => {
    this.setState({
      title: '',
      content: '',
    });
    this.props.onRequestClose();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.onClose}
      >
        <h1>Create new recipe</h1>
        <MuiThemeProvider>
          <TextField
            hintText="Recipe title"
            value={this.state.title}
            onChange={(e, val) => this.setState({title: val})}
          />
        </MuiThemeProvider>
        <br />
        <br />
        <MuiThemeProvider>
          <TextField
            multiLine={true}
            rows={4}
            rowsMax={6}
            hintText="Recipe content"
            value={this.state.content}
            onChange={(e, val) => this.setState({content: val})}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <FlatButton
            onClick={this.handleButtonClick}
            label="Create"
            fullWidth={true}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <FlatButton
            onClick={this.onClose}
            label="Cancel"
            fullWidth={true}
          />
        </MuiThemeProvider>
      </Modal>
    );
  }
}

const isOpen = state => {
  return state.status.modal.isOpen && state.status.modal.modalType === MODAL_TYPE_NEW_RECIPE;
}

const mapStateToProps = state => {
  return {
    isOpen: isOpen(state),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestClose: () => {
      dispatch(closeModal());
    },
    onRequestCreateRecipe: (title, content) => {
      dispatch(createRecipe(title, content));
      dispatch(closeModal());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipeModal);
