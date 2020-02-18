import { connect } from 'react-redux';

import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';

const mSTP = (state) => {
    return {
        playlist: state.entities.playlists.currentPlaylist
    }
};

const mDTP = (dispatch) => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
});

export default connect(mSTP, mDTP)(PlaylistShow);