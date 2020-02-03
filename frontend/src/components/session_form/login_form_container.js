import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log In'
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: (modal) => dispatch(closeModal(modal))

});

export default connect(mSTP, mDTP)(SessionForm);