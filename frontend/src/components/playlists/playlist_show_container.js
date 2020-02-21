import { connect } from 'react-redux';

import PlaylistShow from './playlist_show';
import { fetchPlaylist, sendReaction } from '../../actions/playlist_actions';
import { fetchReactions } from '../../actions/reaction_actions';

const mSTP = (state) => {
    return {
        playlist: state.entities.playlists.currentPlaylist,
        // reaction: state.entities.playlists.reaction
    }
};

const mDTP = (dispatch) => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchReactions: () => dispatch(fetchReactions()),
    sendReaction: (data) => dispatch(sendReaction(data))
});

export default connect(mSTP, mDTP)(PlaylistShow);