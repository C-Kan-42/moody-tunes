import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up'
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: (modal) => dispatch(closeModal(modal))
});

export default connect(mSTP, mDTP)(SessionForm);
