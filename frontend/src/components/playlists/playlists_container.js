import { connect } from 'react-redux';
import Playlists from './playlist_index';
import {fetchPlaylist, fetchPlaylists} from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';
import Playlist from './playlist';

const mapStateToProps = (state) => {
    return {
        playlists: state.entities.playlists
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);