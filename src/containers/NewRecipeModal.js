import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <h1>Create new recipe</h1>
        <MuiThemeProvider>
          <TextField
            hintText="Recipe title"
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
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <FlatButton
            onClick={this.props.onRequestClose}
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
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipeModal);
