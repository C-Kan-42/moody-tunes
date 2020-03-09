import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Profile from './profile';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(SessionActions.fetchUser(userId))
        // fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
        // fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));