import { connect } from 'react-redux';

import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchReactions } from '../../actions/reaction_actions';

const mSTP = (state) => {
    return {
        playlist: state.entities.playlists.currentPlaylist,
        reactions: state.entities.reactions.all
    }
};

const mDTP = (dispatch) => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    fetchReactions: () => dispatch(fetchReactions())
});

export default connect(mSTP, mDTP)(PlaylistShow);