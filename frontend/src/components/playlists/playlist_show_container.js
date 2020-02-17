import { connect } from 'react-redux';

import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mSTP = (state, ownProps) => {
    const playlist = state.entities.playlists[ownProps.match.params.playlistId];

    return { playlist };
};

const mDTP = (dispatch) => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
});

export default connect(mSTP, mDTP)(PlaylistShow);