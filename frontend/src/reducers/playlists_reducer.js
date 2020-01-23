import { RECEIVE_PLAYLISTS, 
    RECEIVE_FOLLOWED_PLAYLISTS 
} from '../actions/playlist_actions';

const PlaylistsReducer = (
    state = { all: {} , followed: {} }
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
};

export default PlaylistsReducer;