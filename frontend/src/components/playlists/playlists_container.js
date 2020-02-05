import { connect } from 'react-redux';
import Playlists from './playlist_index';
import {fetchPlaylists} from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';

const mapStateToProps = (state, ownProps) => {
    return {
        playlists: Object.values(state.entities.playlists.all),
        // count: 0
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);