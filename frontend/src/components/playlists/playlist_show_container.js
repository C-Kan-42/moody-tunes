import { connect } from 'react-redux';

import PlaylistShow from './playlist_show';
import { fetchPlaylist, sendReaction } from '../../actions/playlist_actions';
import { fetchReactions } from '../../actions/reaction_actions';
import { sendFollow, deleteFollow, fetchUserFollows } from '../../actions/follow_actions';

const mSTP = (state) => {
    return {
        playlist: state.entities.playlists.currentPlaylist,
        user: state.session.currentUser,
        follows: state.entities.follows.user
    }
};

const mDTP = (dispatch) => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchReactions: () => dispatch(fetchReactions()),
    sendReaction: (data) => dispatch(sendReaction(data)),
    sendFollow: (data) => dispatch(sendFollow(data)),
    deleteFollow: (data) => dispatch(deleteFollow(data)),
    fetchUserFollows: id => dispatch(fetchUserFollows(id))
});

export default connect(mSTP, mDTP)(PlaylistShow);