import { connect } from 'react-redux';
import { dequeueError } from '../actions/error-actions';
import ErrorModal from '../components/ErrorModal';

export const mapStateToProps = (state) => {
  return {
    isOpen: state.error.exists,
    message: state.error.messages[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestClose: () => {
      dispatch(dequeueError());
    },
  };
};

const ErrorModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorModal);

export default ErrorModalContainer;
