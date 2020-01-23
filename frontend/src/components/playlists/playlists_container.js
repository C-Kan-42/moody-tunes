import { connect } from 'react-redux';
import Playlists from './playlists';

const mapStateToProps = (state) => {
    return {
        playlists: Object.values(state.entities.playlists)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);