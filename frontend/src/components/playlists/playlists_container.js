import { connect } from 'react-redux';
import Playlists from './playlists';

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

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);