import { connect } from 'react-redux';
import Playlists from './playlist_index';
import {fetchPlaylist, fetchPlaylists} from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists
        // count: 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylist: () => dispatch(fetchPlaylist("5e3b22a71d5e182ee2e1b615"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);