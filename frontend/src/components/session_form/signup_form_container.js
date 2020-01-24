import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'sign up'
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: (modal) => dispatch(closeModal(modal))
});

export default connect(mSTP, mDTP)(SessionForm);
