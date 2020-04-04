import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import {
    fetchUserFollows,
    sendFollow,
    deleteFollow
} from '../../actions/follow_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

import Profile from './profile';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlists: state.entities.playlists.all,
        follows: state.entities.follows.user,
        // follow: state.entities.follows.follow,
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(SessionActions.fetchUser(userId)),
        fetchUserFollows: id => dispatch(fetchUserFollows(id)),
        fetchPlaylists: () => dispatch(fetchPlaylists())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));