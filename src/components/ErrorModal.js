import React from 'react';
import Modal from 'react-modal';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const ErrorModal = ({isOpen, message, onRequestClose}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h1>Error</h1>
    <p>{message}</p>
    <FlatButton
      onClick={onRequestClose}
      label="Close"
      fullWidth={true}
    />
  </Modal>
);

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onRequestClose: PropTypes.func.isRequired,
};

export default ErrorModal;
