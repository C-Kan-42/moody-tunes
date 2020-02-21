import { connect } from 'react-redux';
import {fetchPlaylist, fetchPlaylists} from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
// import Playlist from './playlist';

const mapStateToProps = (state) => {
    return {
        playlists: state.entities.playlists.all
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
        fetchPlaylist: (playlist_id) => dispatch(fetchPlaylist(playlist_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);