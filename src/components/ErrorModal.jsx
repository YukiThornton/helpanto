import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';
import FlatButton from 'material-ui/FlatButton';

const ErrorModal = ({
  isOpen,
  message,
  onRequestClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h1>Error</h1>
    <p>{message}</p>
    <FlatButton
      onClick={onRequestClose}
      label="Close"
      fullWidth
    />
  </Modal>
);

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: isRequiredIf(PropTypes.string, props => props.isOpen),
  onRequestClose: PropTypes.func.isRequired,
};

export default ErrorModal;
