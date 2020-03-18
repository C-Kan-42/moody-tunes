import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import {
    fetchUserFollows,
    sendFollow,
    deleteFollow
} from '../../actions/follow_actions';
import { fetchPlaylist } from '../../actions/playlist_actions';

import Profile from './profile';
import * as SessionActions from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlists: state.entities.playlists.all,
        user: state.session.user,
        follows: state.entities.follows.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(SessionActions.fetchUser(userId)),
        fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
        fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));