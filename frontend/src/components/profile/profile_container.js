import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Profile from './profile';
import * as FollowActions from '../../actions/follow_actions';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        follows: state.entities.follows,
        // sessionUserId: state.session.currentUserId,
        user: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFollows: () => dispatch(FollowActions.fetchFollows()),
        deleteFollow: followId => dispatch(FollowActions.deleteFollow(followId)),
        fetchUser: userId => dispatch(SessionActions.fetchUser(userId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));