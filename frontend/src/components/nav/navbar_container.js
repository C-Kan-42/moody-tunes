import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  currentUser: state.session.user //we are mapping a prop called "currentUser" to our greeting component. 
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()), //we are mapping a prop called "logout" that contains a function that points to our logout ACTION
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));